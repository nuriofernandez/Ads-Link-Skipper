window.addEventListener("load", function() {

    var adfly = document.getElementById("adfly");
    adfly.addEventListener("click", function() {
        chrome.extension.getBackgroundPage().enabledSites.adfly = adfly.checked;
        chrome.extension.getBackgroundPage().saveSites();
    });

    var shinkme = document.getElementById("shinkme");
    shinkme.addEventListener("click", function() {
        chrome.extension.getBackgroundPage().enabledSites.shinkme = shinkme.checked;
        chrome.extension.getBackgroundPage().saveSites();
    });

    var croco = document.getElementById("croco");
    croco.addEventListener("click", function() {
        chrome.extension.getBackgroundPage().enabledSites.croco = croco.checked;
        chrome.extension.getBackgroundPage().saveSites();
    });

    var linkshrink = document.getElementById("linkshrink");
    linkshrink.addEventListener("click", function() {
        chrome.extension.getBackgroundPage().enabledSites.linkshrink = linkshrink.checked;
        chrome.extension.getBackgroundPage().saveSites();
    });

    var bluemediafiles = document.getElementById("bluemediafiles");
    bluemediafiles.addEventListener("click", function() {
        chrome.extension.getBackgroundPage().enabledSites.bluemediafiles = bluemediafiles.checked;
        chrome.extension.getBackgroundPage().saveSites();
    });

    var spam = document.getElementById("spam");
    spam.addEventListener("click", function() {
        chrome.extension.getBackgroundPage().enabledSites.spam = spam.checked;
        chrome.extension.getBackgroundPage().saveSites();
    });

    // Load current status of sites.
    adfly.checked = chrome.extension.getBackgroundPage().enabledSites.adfly;
    shinkme.checked = chrome.extension.getBackgroundPage().enabledSites.shinkme;
    croco.checked = chrome.extension.getBackgroundPage().enabledSites.croco;
    linkshrink.checked = chrome.extension.getBackgroundPage().enabledSites.linkshrink;
    bluemediafiles.checked = chrome.extension.getBackgroundPage().enabledSites.bluemediafiles;
    spam.checked = chrome.extension.getBackgroundPage().enabledSites.spam;

});