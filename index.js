(function () {
    const currentUrl = document.currentScript.src;

    const getUIDfromURL = (url) => {
        if(!url) return false;
        const urlArray = url.split('/')
        const lastSeg = urlArray.pop()

        // various guards to prevent junk requests
        if(urlArray.length !== 3) return false
        if(!lastSeg.length) return false;
        if(lastSeg.indexOf('promolayer.io') !== -1) return false;
    }

    function addScript( uid ) {
        var s = document.createElement( 'script' );
        s.setAttribute('type', 'module');
        s.setAttribute( 'src', 'https://scripts.promolayer.io?uid='+uid );
        document.body.appendChild( s );
    }

    const UID = getUIDfromURL(currentUrl);
    if(UID){
        addScript(UID)
    }
})();