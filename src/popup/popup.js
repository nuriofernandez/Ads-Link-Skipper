window.onload = function(){

    var adfly = document.getElementById("adfly");
    adfly.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.adfly = adfly.checked; chrome.extension.getBackgroundPage().save_sites();}
    
    var ouo = document.getElementById("ouo");
    ouo.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.ouo = ouo.checked; chrome.extension.getBackgroundPage().save_sites();}
    
    var shst = document.getElementById("shst");
    shst.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.shst = shst.checked; chrome.extension.getBackgroundPage().save_sites();}
    
    var shinkme = document.getElementById("shinkme");
    shinkme.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.shinkme = shinkme.checked; chrome.extension.getBackgroundPage().save_sites();}
   
    var croco = document.getElementById("croco");
    croco.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.croco = croco.checked; chrome.extension.getBackgroundPage().save_sites();}
    
    var linkshrink = document.getElementById("linkshrink");
    linkshrink.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.linkshrink = linkshrink.checked; chrome.extension.getBackgroundPage().save_sites();}
    
    var bluemediafiles = document.getElementById("bluemediafiles");
    bluemediafiles.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.bluemediafiles = bluemediafiles.checked; chrome.extension.getBackgroundPage().save_sites();}
    
    var spam = document.getElementById("spam");
    spam.onclick = function(){chrome.extension.getBackgroundPage().enabled_sites.spam = spam.checked; chrome.extension.getBackgroundPage().save_sites();}

    adfly.checked = chrome.extension.getBackgroundPage().enabled_sites.adfly;
    ouo.checked = chrome.extension.getBackgroundPage().enabled_sites.ouo;
    shst.checked = chrome.extension.getBackgroundPage().enabled_sites.shst;
    shinkme.checked = chrome.extension.getBackgroundPage().enabled_sites.shinkme;
    croco.checked = chrome.extension.getBackgroundPage().enabled_sites.croco;
    linkshrink.checked = chrome.extension.getBackgroundPage().enabled_sites.linkshrink;
    bluemediafiles.checked = chrome.extension.getBackgroundPage().enabled_sites.bluemediafiles;
    spam.checked = chrome.extension.getBackgroundPage().enabled_sites.spam;
}

