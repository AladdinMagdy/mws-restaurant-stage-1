if ('serviceWorker' in navigator) {
    window.addEventListener('load',() => {
        navigator.serviceWorker.register('/sw.js')
        .then(registration => {
                // success
                console.log('SW registration success');
                console.log(registration.scope);
            },
            err => {
                // failure
                console.log('SW registration failed: ', err);
            }
        );
    });
}
