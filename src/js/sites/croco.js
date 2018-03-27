/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for croco.me

**/
setTimeout(skip, 100);

function skip(){
    var time = setTimeout(skip, 100);
    var ads = xp('//*[@id="form-captcha"]');
    if(ads != null){
        clearTimeout(time);
        ads.submit();
    }
    var ads = xp('//*[@id="btn-main"]');
    if(ads != null){
        clearTimeout(time);
        window.location.replace(ads.href);
    }
    if(document.body != null && xp('//*[@id="Notify"]') == null){
        var html = '<div id="Notify" style="position: fixed;bottom: 10px;color: #fff;background-color: #ff6060;width: 100%;z-index: 999999;text-align: center;font-size: 23px;padding: 21px;">Ads link skiper is trying to bypass this site... If you found any error please report it to personal@xxnurioxx.me <a href="javascript:document.getElementById(\'Notify\').remove();" style="color: #fff;font-weight: 800;background-color: #d95b57;border-radius: 15px;padding: 8px;margin-left: 20px;">Hide this</a></div>';
        var div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
    }
}

function xp(query) {
    return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}
