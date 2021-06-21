/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for ouo.io

**/

window.addEventListener("load", () => {
	// Locate the skip button
	const button = xp('//*[@id="btn-main"]');

	// Click the button every second
	setInterval(() => button.click(), 1000);
});

/* xPath function */
function xp(query) {
	return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}