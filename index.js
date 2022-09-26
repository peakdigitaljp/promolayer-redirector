(function () {
    const currentUrl = document.currentScript.src;
    const prefixUrl = currentUrl.indexOf('dscripts') !== -1 ? 'https://dmodules.promolayer.io' : 'https://modules.promolayer.io'

    // fuck all of IE right off
    const detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/
    if (detectIEregexp.test(navigator.userAgent)) return;

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
        s.setAttribute( 'src', prefixUrl+'?uid='+uid );
        document.body.appendChild( s );
    }

    const UID = getUIDfromURL(currentUrl);
    if(UID){
        addScript(UID)
    }
})();