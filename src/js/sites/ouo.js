/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for ouo.io

**/ 

window.onload = function(){

	var btn = xp('//*[@id="btn-main"]');
	if(btn != null && btn.innerHTML == "Get Link"){
		var form = xp('/html/body/section/div/div/div/div/div/form');
		form.submit();
	}
	
}


function xp(query) {
    return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}