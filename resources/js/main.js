document.addEventListener('DOMContentLoaded', () => {
    /** @type {HTMLIFrameElement} */
    const iframe = document.getElementById('game');
    const params = new URLSearchParams({
        timestamp: Date.now()
    });

    // Generate random values to prevent
    // the client browser to cache

    iframe.name = Math.round(Math.random() * 10000);
    iframe.src = `./game/index.html?${params}`;
});

Neutralino.init()
// Put your Neutralino code here...
