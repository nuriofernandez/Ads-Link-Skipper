/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for shink.me

**/

setTimeout(submit, 100);

let html = '<div id="Notify" style="position: fixed;bottom: 10px;color: #fff;background-color: #ff6060;width: 100%;z-index: 999999;text-align: center;font-size: 23px;padding: 21px;">This site need 3 captcha solves after Ads link skiper can do skip :) If you found any error please report it to personal@xxnurioxx.me <a href="javascript:document.getElementById(\'Notify\').remove();" style="color: #fff;font-weight: 800;background-color: #d95b57;border-radius: 15px;padding: 8px;margin-left: 20px;">Hide this</a></div>';

if (document.URL.split("/")[2] == "fas.li") {
    html = '<div id="Notify" style="position: fixed;bottom: 10px;color: #fff;background-color: #ff6060;width: 100%;z-index: 999999;text-align: center;font-size: 23px;padding: 21px;">This site need captcha solve after Ads link skiper can do skip :) If you found any error please report it to personal@xxnurioxx.me <a href="javascript:document.getElementById(\'Notify\').remove();" style="color: #fff;font-weight: 800;background-color: #d95b57;border-radius: 15px;padding: 8px;margin-left: 20px;">Hide this</a></div>';
}

const div = document.createElement('div');
div.innerHTML = html;
window.addEventListener("load", () => {
    if (xp('//*[@id="url"]') == null) document.body.appendChild(div);
});

let submited = false;

function submit() {

    const error1 = xp('//*[@id="container"]/h1');
    const error2 = xp('/html/body');

    if ((error1 != null && error1.innerHTML == "An Error Was Encountered") || (error2 != null && error2.innerHTML == "Error in exception handler.")) {
        const url = document.URL.split('/')[3];
        if (url == "redirect") url = document.URL.split('/')[5];
        window.location.href = "http://shink.me/" + url;
        return;
    }

    if (!submited) setTimeout(submit, 100);
    const center = xp('//*[@class="center-captcha"]');
    const captcha = xp('//*[@id="skip"]/script');
    const formto = xp('//*[@id="skip"]');

    const skipbtn = xp('//*[@id="btn-main"]');
    if (skipbtn != null) {
        if (skipbtn.href != null && skipbtn.href != "undefined" && skipbtn.href != "Undefined" && skipbtn.href != "") {
            window.location.replace(skipbtn.href);
            submited = true;
            return;
        }
    }

    if (skipbtn != null && (skipbtn.href == null || skipbtn.href == "")) {
        skipbtn.disabled = false;
        skipbtn.click();
        submited = true;
        return;
    }

    if (formto != null && captcha == null) {
        formto.submit();
        submited = true;
        return;
    } else if (xp('//*[@id="url"]') == null) {
        setTimeout(function() {
            let ad = xp('//*[@id="captcha"]/div/div/div');
            if (ad != null) ad.remove();
            ad = xp('//*[@id="page-top"]/div[2]/div/div/div/div[1]/a');
            if (ad != null) ad.remove();
            ad = xp('//*[@id="page-top"]/div[2]/div/div/div/div[2]');
            if (ad != null) ad.remove();
            ad = xp('//*[@id="page-top"]/div[1]/div[1]/div/div/div/div[1]/iframe');
            if (ad != null) ad.remove();
            ad = xp('//*[@id="page-top"]/iframe');
            if (ad != null) ad.remove();
            ad = xp('//a[@target="_blank"]');
            if (ad != null) ad.remove();
        }, 10);
    }

}

/* xPath function */
function xp(query) {
    return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}