/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Background script

**/


// Enabled sites variable switch
var enabled_sites = {
    adfly: true,
    shinkme: true,
    shst: true,
    croco: true,
    linkshrink: true,
    ouo: true,
    bluemediafiles: true,
    spam: true,
    captcha: false,
    cuon: false
}

/******************** Storage manager start */

function save_sites() {
    chrome.storage.local.set({
        'enabled_sites': enabled_sites
    }, function(result) {
        console.log("Updated data.");
    });
}

chrome.storage.local.get('enabled_sites', function(result) {
    if (result == null) return;
    enabled_sites = result.enabled_sites;
    console.log("Successful loaded data.");

    if (enabled_sites == null || (enabled_sites != null && enabled_sites.adfly == null)) {
        enabled_sites = {
            adfly: true,
            shinkme: true,
            shst: true,
            croco: true,
            linkshrink: true,
            ouo: true,
            bluemediafiles: true,
            spam: true,
            captcha: false,
            cuon: false
        }
    }

    // Disable disabled functions
    if ((enabled_sites != null && enabled_sites.captcha == null)) {
        enabled_sites.captcha = false;
        enabled_sites.cuon = false;
    }

});

/******************** Storage manager end */


/******************** Domain list start */

// sh.st domain list
var requestFilter_sh = {
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
var requestFilter_spam = {
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
var requestFilter_adf = {
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
var requestFilter_shinkme = {
    urls: [
        "*://*.shon.xyz/*",
        "*://*.fas.li/*",
        "*://*.shink.in/*",
        "*://*.shink.me/*"
    ]
};

// ouo.io domain list
var requestFilter_ouo = {
    urls: [
        "*://*.ouo.io/*",
        "*://*.ouo.press/*"
    ]
};

// cuon domain list
var requestFilter_cuon = {
    urls: [
        "*://*.cuon.io/*"
    ]
};

// tmearn domain list
var requestFilter_tmearn = {
    urls: [
        "*://*.tmearn.com/*"
    ]
};

// croco domain list
var requestFilter_croco = {
    urls: [
        "*://*.croco.site/*"
    ]
};

// LinkShrink domain list
var requestFilter_linkshrink = {
    urls: [
        "*://*.linkshrink.net/*"
    ]
};

// Bluemediafiles domain list.
var requestFilter_bluemefi = {
    urls: [
        "*://*.bluemediafiles.com/*"
    ]
};

/******************** Domain list end */


/******************** Sites script's start */

/** Bluemediafiles sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.bluemediafiles) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/BlueMediaFiles.js",
        runAt: "document_start"
    });
}, requestFilter_bluemefi);


/** Adf.ly sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.adfly) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/adfly.js",
        runAt: "document_start"
    });
}, requestFilter_adf);


/** Cuon.io sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.cuon) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/cuon.io.js",
        runAt: "document_start"
    });
}, requestFilter_cuon);


/** Croco.sites sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.croco) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/croco.js",
        runAt: "document_start"
    });
}, requestFilter_croco);


/** ShinkMe sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.shinkme) return;
    if (details.type == "main_frame" && details.url.indexOf("shink.in") != -1) chrome.tabs.update(details.tabId, {
        url: details.url.replace("shink.in", "shink.me")
    });
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/shinkme.js",
        runAt: "document_start"
    });
}, requestFilter_shinkme);

/** LinkShrink sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.linkshrink) return;
    chrome.tabs.executeScript(details.tabId, {
        file: "js/sites/linkshrink.js",
        runAt: "document_start"
    });
}, requestFilter_linkshrink);


/** SpamShit sites **/
chrome.webRequest.onCompleted.addListener(function(details) {
    if (!enabled_sites.spam) return;
    if (details.type == "main_frame") chrome.tabs.remove(details.tabId);
}, requestFilter_spam);


/** Sh.sh sites **/
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    if (!enabled_sites.shst) return;
    var headers = details.requestHeaders;
    headers = headers.filter(function(x) {
        return x.name !== 'User-Agent';
    });
    return {
        requestHeaders: headers
    };
}, requestFilter_sh, ['requestHeaders', 'blocking']);

/******************** Sites script's end */