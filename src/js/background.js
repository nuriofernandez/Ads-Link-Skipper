/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Background script

**/

// Enabled sites variable switch
var enabledSites = {
    adfly: true,
    shinkme: true,
    shst: true,
    croco: true,
    linkshrink: true,
    bluemediafiles: true,
    spam: true,
}

/******************** Storage manager start */

function saveSites() {
    chrome.storage.local.set({
        'enabledSites': enabledSites
    }, function(result) {
        console.log("Updated data.");
    });
}

chrome.storage.local.get('enabledSites', function(result) {
    if (result == null) return;

    enabledSites = result.enabledSites;
    console.log("Successful loaded data.");

    // In case that stored sites was invalid, redefine sites map.
    if (enabledSites == null || (enabledSites != null && enabledSites.adfly == null)) {
        enabledSites = {
            adfly: true,
            shinkme: true,
            shst: true,
            croco: true,
            linkshrink: true,
            bluemediafiles: true,
            spam: true,
        }
    }

});

/******************** Storage manager end */


/******************** Domain list start */

// sh.st domain list
var requestFilterSh = {
    urls: [
        "*://*.sh.st/*",
        "*://*.clkmein.com/*",
        "*://*.viid.me/*",
        "*://*.xiw34.com/*",
        "*://*.destyy.com/*",
        "*://*.ceesty.com/*",
        "*://*.clkme.me/*",
        "*://*.cllkme.com/*",
        "*://*.corneey.com/*",
        "*://*.festyy.com/*",
        "*://*.gestyy.com/*",
        "*://*.jnw0.com/*",
        "*://*.qaafa.com/*",
        "*://*.wiid.me/*",
        "*://*.xiw34.com/*"
    ]
};

// Spam/Popup's domain list
var requestFilterSpam = {
    urls: [
        "*://*.higheurest.com/*",
        "*://*.adviewgroup.com/*",
        "*://*.ajkzd9h.com/*",
        "*://*.scrn-supp-6689.cf/*",
        "*://*.lyuoaxruaqdo.com/*",
        "*://*.sax.peakonspot.com/*",
        "*://*.sistacked.com/*",
        "*://*.funsafetab.com/*",
        "*://*.geniusdisplay.com/*",
        "*://*.38newupdate.xyz/*",
        "*://*.adtrker.com/*",
        "*://*.elvenar.com/*",
        "*://*.vpn-freeproxy.com/*",
        "*://*.newtabtv.com/*",
        "*://*.mellowads.com/*",
        "*://*.superimad.com/*",
        "*://*.hibids10.com/*",
        "*://*.muzicplay.com/*",
        "*://*.adexchangemachine.com/*",
        "*://*.medianewpage.com/*",
        "*://*.mysagagame.com/*",
        "*://*.nextoptim.com/*",
        "*://*.newtab-tv.com/*",
        "*://*.best2017games.com/*",
        "*://*.hicpm10.com/*",
        "*://*.thewhizmarketing.com/*",
        "*://*.williamhill.es/*",
        "*://*.top10posts.com/*",
        "*://*.baiduccdn.com/*",
        "*://*.beforceive.com/*",
        "*://*.gamezjet.com/*",
        "*://*.fftrak.pro/*",
        "*://*.translationbuddy.com/*",
        "*://*.dnoppus.com/*",
        "*://*.elvenar.com/*",
        "*://*.esgentside.com/*",
        "*://*.tviso.com/*",
        "*://*.gamez1a.com/*",
        "*://*.mgid.com/*",
        "*://*.bestgame.directory/*",
        "*://*.popads.net/*",
        "*://*.adk2x.com/*",
        "*://*.usupporthelperslr.win/*",
        "*://*.62b70ac32d4614b.com/*",
        "*://*.pushedwebnews.com/*",
        "*://*.trackweblink.com/*",
        "*://*.di-mart.com/*",
        "*://*.couponxplorer.com/*",
        "*://*.musicgalary.tk/*",
        "*://*.occasic.com/*",
        "*://*.twobisqui3l.com/*",
        "*://*.musikzoo.com/*",
        "*://*.expertadvice.ga/*",
        "*://*.stream-direct.co/*",
        "*://*.addictedtomovies.co/*",
        "*://*.alfredean.com/*",
        "*://*.durined.com/*",
        "*://*.deloton.com/*",
        "*://*.forminine.com/*",
        "*://*.girrrly.com/*",
        "*://*.onclickclear.com/*",
        "*://*.juegos-online.info/*",
        "*://*.perfecttoolmedia.com/*",
        "*://*.onclkds.com/*",
        "*://*.optimum-io-speed.site/*",
        "*://*.nextyourcontent.com/*",
        "*://*.closeloop.cf/*",
        "*://*.veirregnant.club/*",
    ]
};

// Adf.ly domains list
var requestFilterAdf = {
    urls: [
        "*://*.larati.net/*",
        "*://*.xterca.net/*",
        "*://*.evassmat.com/*",
        "*://*.gloyah.net/*",
        "*://*.uclaut.net/*",
        "*://*.atabencot.net/*",
        "*://*.thouth.net/*",
        "*://*.cinebo.net/*",
        "*://*.dapalan.com/*",
        "*://*.vaussneim.net/*",
        "*://*.briskgram.net/*",
        "*://*.swiftviz.net/*",
        "*://*.kudoflow.com/*",
        "*://*.activetect.net/*",
        "*://*.brightvar.bid/*",
        "*://*.clearload.bid/*",
        "*://*.restorecosm.bid/*",
        "*://*.agileurbia.com/*",
        "*://*.threadsphere.bid/*",
        "*://*.zipteria.com/*",
        "*://*.queuecosm.bid/*",
        "*://*.yobuilder.com/*",
        "*://*.quamiller.com/*",
        "*://*.microify.com/*",
        "*://*.babblecase.com/*",
        "*://*.cogismith.com/*",
        "*://*.abpmirror.tk/*",
        "*://*.ad.inventivetalent.org/*",
        "*://*.adf.ly/*",
        "*://*.anitoons.co.vu/*",
        "*://*.atomcurve.com/*",
        "*://*.atominik.com/*",
        "*://*.ay.gy/*",
        "*://*.battleate.com/*",
        "*://*.bluenik.com/*",
        "*://*.casualient.com/*",
        "*://*.flyserve.co/*",
        "*://*.getrom.net/*",
        "*://*.infortr.co.vu/*",
        "*://*.j.gs/*",
        "*://*.ksatech.info/*",
        "*://*.manggugel.ga/*",
        "*://*.mmoity.com/*",
        "*://*.picocurl.com/*",
        "*://*.pintient.com/*",
        "*://*.q.gs/*",
        "*://*.riffhold.com/*",
        "*://*.simizer.com/*",
        "*://*.tinyical.com/*",
        "*://*.tinyium.com/*",
        "*://*.viahold.com/*",
        "*://*.zo.ee/*",
        "*://*.skamason.com/*"
    ]
};

// shink.me domain list
var requestFilterShinkme = {
    urls: [
        "*://*.shon.xyz/*",
        "*://*.fas.li/*",
        "*://*.shink.in/*",
        "*://*.shink.me/*"
    ]
};

// croco domain list
var requestFilterCroco = {
    urls: [
        "*://*.croco.site/*"
    ]
};

// LinkShrink domain list
var requestFilterLinkshrink = {
    urls: [
        "*://*.linkshrink.net/*"
    ]
};

// Bluemediafiles domain list.
var requestFilterBluemefi = {
    urls: [
        "*://*.bluemediafiles.com/*"
    ]
};

/******************** Domain list end */


/******************** Sites script's start */

/** Bluemediafiles sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabledSites.bluemediafiles) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/BlueMediaFiles.js",
        runAt: "document_start"
    });
}, requestFilterBluemefi);


/** Adf.ly sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabledSites.adfly) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/adfly.js",
        runAt: "document_start"
    });
}, requestFilterAdf);


/** Croco.sites sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabledSites.croco) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/croco.js",
        runAt: "document_start"
    });
}, requestFilterCroco);


/** ShinkMe sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabledSites.shinkme) return;
    if (details.type == "main_frame" && details.url.indexOf("shink.in") != -1) chrome.tabs.update(details.tabId, {
        url: details.url.replace("shink.in", "shink.me")
    });
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/shinkme.js",
        runAt: "document_start"
    });
}, requestFilterShinkme);

/** LinkShrink sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabledSites.linkshrink) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/linkshrink.js",
        runAt: "document_start"
    });
}, requestFilterLinkshrink);


/** Sh.sh sites **/
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    if (!enabledSites.shst) return;
    var headers = details.requestHeaders;
    headers = headers.filter(function(x) {
        return x.name !== 'User-Agent';
    });
    return {
        requestHeaders: headers
    };
}, requestFilterSh, ['requestHeaders', 'blocking']);


/** SpamShit sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabledSites.spam) return;
    if (details.type == "main_frame") chrome.tabs.remove(details.tabId);
}, requestFilterSpam);

/******************** Sites script's end */