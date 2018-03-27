/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for ouo.io

NOTE: THIS SCRIPT IS BROKED!

**/ 

var token = "d4lgJnbmO5nI8LtWQc7ZiaY3S0yWSGNrfc0Ka17E";

if(document.URL.split('/').length == 4){

	var r_url = document.URL;
	var url = document.URL.split('/')[3];
	console.log("Data:");
	console.log("0. "+"First")
	console.log("1. "+r_url);
	console.log("2. "+url);
	
	if(url != "rgo" && url != "go" && url != "auth" && url != "rates" && url.length > 1){
		document.write('<form id="formtoid" method="POST" action="http://ouo.io/go/' + url + '#" accept-charset="UTF-8"><input name="_token" type="hidden" value="'+token+'"><button type="submit" style="display:none" id="btn-main" class="btn btn-main">Get Link</button></form>');
		document.getElementById('formtoid').submit();
	}

}else if(document.URL.split('/').length == 5){

	var r_url = document.URL;
	var action = document.URL.split('/')[3];
	var url = document.URL.split('/')[4];

	if(action == "go" && !r_url.endsWith("#")){
		console.log("Data:");
		console.log("0. "+"Un-bug")
		console.log("1. "+r_url);
		console.log("2. "+url);
		console.log("3. "+action);

		window.location.href = "http://ouo.io/"+url;
	}else{

		console.log("Data:");
		console.log("0. "+"Second")
		console.log("1. "+r_url);
		console.log("2. "+url);
		console.log("3. "+action);
		
		if(action != "rgo" && action != "auth" && action != "rates" && url.length > 1){	
			document.write('<form id="formtoid" method="POST" action="http://ouo.io/rgo/' + url + '" accept-charset="UTF-8"><input name="_token" type="hidden" value="'+token+'"><button type="submit" style="display:none" id="btn-main" class="btn btn-main">Get Link</button></form>');
			document.getElementById('formtoid').submit();
		}
	}

}


if(url != "rgo" && url != "go"){
	var html = '<div id="Notify" style="position: fixed;bottom: 10px;color: #fff;background-color: #ff6060;width: 100%;z-index: 999999;text-align: center;font-size: 23px;padding: 21px;">This site can be damaged by extension Ads link skiper. If you found any error please report it to personal@xxnurioxx.me <a href="javascript:document.getElementById(\'Notify\').remove();" style="color: #fff;font-weight: 800;background-color: #d95b57;border-radius: 15px;padding: 8px;margin-left: 20px;">Hide this</a></div>';
	var div = document.createElement('div');
	div.innerHTML = html;
	window.onload = function(){document.body.appendChild(div);}
}
