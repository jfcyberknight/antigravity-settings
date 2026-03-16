chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === 'start_capture') {
    const tabId = message.tabId;
    
    try {
      // 1. Get page dimensions
      const [{ result: dimensions }] = await chrome.scripting.executeScript({
        target: { tabId },
        func: () => ({
          height: document.documentElement.scrollHeight,
          width: document.documentElement.scrollWidth,
          viewportHeight: window.innerHeight,
          viewportWidth: window.innerWidth,
          devicePixelRatio: window.devicePixelRatio
        })
      });

      // 2. Setup Offscreen document for stitching
      const existingContexts = await chrome.runtime.getContexts({
        contextTypes: ['OFFSCREEN_DOCUMENT']
      });

      if (existingContexts.length === 0) {
        await chrome.offscreen.createDocument({
          url: 'src/offscreen.html',
          reasons: ['BLOBS'],
          justification: 'Assemblage des captures de page'
        });
      }

      const fullWidth = dimensions.width * dimensions.devicePixelRatio;
      const fullHeight = dimensions.height * dimensions.devicePixelRatio;
      
      chrome.runtime.sendMessage({ 
        action: 'init_canvas', 
        width: fullWidth, 
        height: fullHeight 
      });

      // 3. Capture loops
      let currentScroll = 0;
      const step = dimensions.viewportHeight;
      
      while (currentScroll < dimensions.height) {
        // Scroll
        await chrome.scripting.executeScript({
          target: { tabId },
          func: (y) => window.scrollTo(0, y),
          args: [currentScroll]
        });

        // Wait for potential lazy loading or rendering and respect quota
        // Quota is 2 calls per second, so 700ms is a safe buffer
        await new Promise(r => setTimeout(r, 700));

        // Capture with retry logic for quota errors
        const captureWithRetry = async (retries = 3) => {
          try {
            return await chrome.tabs.captureVisibleTab(null, { format: 'png' });
          } catch (err) {
            if (err.message.includes('MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND') && retries > 0) {
              console.warn(`Quota exceeded, retrying in 1s... (${retries} retries left)`);
              await new Promise(r => setTimeout(r, 1000));
              return await captureWithRetry(retries - 1);
            }
            throw err;
          }
        };

        const dataUrl = await captureWithRetry();
        
        // Send to offscreen to draw
        chrome.runtime.sendMessage({
          action: 'draw_chunk',
          dataUrl,
          x: 0,
          y: currentScroll * dimensions.devicePixelRatio
        });

        currentScroll += step;
        
        // Update progress in popup
        const progress = Math.min(100, Math.round((currentScroll / dimensions.height) * 100));
        chrome.runtime.sendMessage({ action: 'update_progress', progress });
      }

      // 4. Finish
      chrome.runtime.sendMessage({ action: 'finalize_capture' });

    } catch (error) {
      console.error(error);
      chrome.runtime.sendMessage({ action: 'capture_error', error: error.message });
    }
  }

  if (message.action === 'download_result') {
    chrome.downloads.download({
      url: message.dataUrl,
      filename: `capture_${Date.now()}.png`,
      saveAs: true
    });
    chrome.offscreen.closeDocument();
    chrome.runtime.sendMessage({ action: 'capture_complete' });
  }
});
