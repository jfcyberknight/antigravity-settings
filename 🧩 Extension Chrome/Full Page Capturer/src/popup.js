document.getElementById('captureBtn').addEventListener('click', async () => {
  const btn = document.getElementById('captureBtn');
  const progressWrapper = document.getElementById('progressWrapper');
  const progressBar = document.getElementById('progressBar');
  const statusText = document.getElementById('statusText');
  const container = document.getElementById('mainContainer');

  btn.disabled = true;
  progressWrapper.style.display = 'flex';
  container.classList.add('processing');

  // Request the capture from background script
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('edge://')) {
    alert('Impossible de capturer une page système du navigateur.');
    btn.disabled = false;
    progressWrapper.style.display = 'none';
    container.classList.remove('processing');
    return;
  }
  
  chrome.runtime.sendMessage({ action: 'start_capture', tabId: tab.id });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'update_progress') {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${message.progress}%`;
  } else if (message.action === 'capture_complete') {
    window.close(); // Close popup when done
  } else if (message.action === 'capture_error') {
    alert('Échec de la capture : ' + message.error);
    const btn = document.getElementById('captureBtn');
    btn.disabled = false;
  }
});
