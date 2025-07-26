document.addEventListener('DOMContentLoaded', () => {
    /** @type {HTMLIFrameElement} */
    const iframe = document.getElementById('game');
    const inheritParams = new URL(document.location.toString()).searchParams;
    const params = new URLSearchParams({
        // Pass the query params to the iFrame
        // This is needed for multi-window applications
        ...inheritParams,
        // Generate random values to prevent
        // the client browser to cache
        timestamp: Date.now()
    });


    iframe.name = Math.round(Math.random() * 10000);
    iframe.src = `./game/index.html?${params}`;
});

Neutralino.init()
// Put your Neutralino code here...
