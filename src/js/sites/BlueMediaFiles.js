/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for bluemediafiles.com

**/

/** OnLoad event */
window.addEventListener("DOMContentLoaded", () => {

    //Get the result url
    let resultUrl = xp('/html/body/table/tbody[2]/tr/td/div/table/tbody/tr/td/script[1]').innerHTML;
    resultUrl= resultUrl.split("FinishMessage = '<a href=\"")[1].split("\" ><img class=")[0];

    //Redirect broser to the result url
    window.location.href=resultUrl;

});

/** xPath function */
function xp(query) {
    return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
