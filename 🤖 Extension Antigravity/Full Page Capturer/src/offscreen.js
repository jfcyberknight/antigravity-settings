const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'init_canvas') {
    canvas.width = message.width;
    canvas.height = message.height;
  } else if (message.action === 'draw_chunk') {
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, message.x, message.y);
    };
    img.src = message.dataUrl;
  } else if (message.action === 'finalize_capture') {
    // Give a bit of time for the last image to load and draw
    setTimeout(() => {
      const dataUrl = canvas.toDataURL('image/png');
      chrome.runtime.sendMessage({ action: 'download_result', dataUrl });
    }, 500);
  }
});
