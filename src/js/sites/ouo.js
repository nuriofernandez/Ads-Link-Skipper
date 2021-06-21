/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for ouo.io

**/ 

window.addEventListener("load", () => {

	// Locate the skip button
	const btn = xp('//*[@id="btn-main"]');
	
	// When the button have the value "get link" submit the form
	if(btn != null && btn.innerHTML == "Get Link"){
		const form = xp('/html/body/section/div/div/div/div/div/form');
		form.submit();
	}
	
});

/* xPath function */
function xp(query) {
    return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}