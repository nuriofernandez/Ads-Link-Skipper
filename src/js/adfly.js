/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for adf.ly

**/

// Thankyou to https://github.com/StoreClerk/AdF.ly-Skipper/blob/master/AdF.ly%20Skipper/js/script.js
// Tankyou to tote.ervin (PD: Add me to your code too!)

document.addEventListener('DOMNodeRemoved', skip, false);
document.addEventListener('DOMContentLoaded', function(){ 
	document.removeEventListener('DOMNodeRemoved', skip, false);
});

function skip(){
	var ysmm = /ysmm = \'(.*?)\';/gi;
	var code = ysmm.exec(document.getElementsByTagName('html')[0].innerHTML);
	if(code == null)return;
	code = code[1];
	var codeLeft = '', codeRight = '';
	for (var i = 0; i < code.length; i++) {
		if (i % 2 == 0) codeLeft += code.charAt(i);
		else codeRight = code.charAt(i) + codeRight;
	}

	code = (codeLeft + codeRight).split('');
	for (var i = 0; i < code.length; i++) {
		if (isNaN(code[i]))continue;
		for (var j = i + 1; j < code.length; j++) {
			if (isNaN(code[j])) continue;
			if ((code[i]^code[j]) < 10) code[i] = code[i]^code[j];
			i = j;
			j = code.length;
		}
	}

	url = code.join('');
	url = window.atob(url);
	url = url.substring(16, url.length - 16);
	window.location = url;
}

setTimeout(verifyLock, 500);
function verifyLock() {
	var time = setTimeout(verifyLock, 500);
	var elementclick = xp('//*[@id="continue"]/div/a');
	if (elementclick != null && elementclick.href.length > 0) {

		var html = '<div id="Notify" style="position: fixed;bottom: 10px;color: #fff;background-color: #ff6060;width: 100%;z-index: 999999;text-align: center;font-size: 23px;padding: 21px;">Ads link skiper is trying to bypass this site... If you found any error please report it to personal@xxnurioxx.me <a href="javascript:document.getElementById(\'Notify\').remove();" style="color: #fff;font-weight: 800;background-color: #d95b57;border-radius: 15px;padding: 8px;margin-left: 20px;">Hide this</a></div>';
		var div = document.createElement('div');
		div.innerHTML = html;
		document.body.appendChild(div);

		window.location.replace(elementclick.href);
		return;
	}
}

if (document instanceof HTMLDocument) {
	var script = document.createElement('script');
	script.textContent = code;
	document.documentElement.appendChild(script);
}


function xp(query) {
	return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}