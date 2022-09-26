(function () {
    const currentUrl = document.currentScript.src;
    const prefixUrl = currentUrl.indexOf('dscripts') !== -1 ? 'https://dmodules.promolayer.io/index.js' : 'https://modules.promolayer.io/index.js'

    const getUIDfromURL = (url) => {
        if(!url) return false;
        const urlArray = url.split('/')
        const lastSeg = urlArray.pop()

        // various guards to prevent junk requests
        if(urlArray.length !== 3) return false
        if(!lastSeg.length) return false;
        if(lastSeg.indexOf('promolayer.io') !== -1) return false;
        return lastSeg;
    }

    function addScript( uid ) {
        var s = document.createElement( 'script' );
        s.setAttribute('type', 'module');
        s.setAttribute( 'src', prefixUrl+'?uid='+uid );
        document.head.appendChild( s );
    }

    const UID = getUIDfromURL(currentUrl);

    // fuck all of IE right off
    const detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/
    const isIE = detectIEregexp.test(navigator.userAgent)

    if (UID && !isIE) {
        addScript(UID)
    }
})();