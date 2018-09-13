/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for ouo.io

**/ 

window.onload = function(){
	
	let captchaInterval = setInterval(() => {
		var btn = xp('//*[@id="invisibleCaptchaShortlink"]');
		if(btn != null && !btn.disabled){
			console.log("OK!!");
			xp('//*[@id="link-view"]').submit();
		}  
		
		var btn2 = xp('//a[text()="Get Link"]');
		if(btn2 != null && !btn2.disabled && btn2.getAttribute('data-href') != null){
			console.log("OK!!");
			window.location.href = btn2.getAttribute('data-href');
		}   
		
	}, 500);
	
}


function xp(query) {
    return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}