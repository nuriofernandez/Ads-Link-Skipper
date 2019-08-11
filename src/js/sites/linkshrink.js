/** 

[Ads link skiper] by xXNurioXx
https://chrome.google.com/webstore/detail/ads-link-skiper/bkpeohkfimdfogdnpcnokjkbpankkmil

Script for linkshrink.net

**/

setTimeout(skip, 100);

var html = '<div id="Notify" style="position: fixed;bottom: 10px;color: #fff;background-color: #ff6060;width: 100%;z-index: 999999;text-align: center;font-size: 23px;padding: 21px;"><p>This site can be damaged by extension Ads link skiper. If you found any error please report it to personal@xxnurioxx.me </p><b>REMEMBER DISABLE OTHERS AD BLOCKERS AT THIS SITE.</b><br><br>  <a href="javascript:document.getElementById(\'Notify\').remove();" style="color: #fff;font-weight: 800;background-color: #d95b57;border-radius: 15px;padding: 8px;margin-left: 20px;">Hide this</a></div>';
var div = document.createElement('div');
div.innerHTML = html;
window.onload = function() { document.body.appendChild(div); }

function skip() {
    var time = setTimeout(skip, 100);

    for (var a = 1; a < xpL('/html/body/script'); a++) {
        if (!xp('/html/body/script[' + a + ']').innerHTML.startsWith('document.getElementById("btd")')) continue;
        var btnelement = xp('/html/body/script[' + a + ']').innerHTML.split('revC("')[1].split('"),')[0];
        var url = revC(btnelement);
        if (url.length > 0) {
            window.location.replace(url);
            clearTimeout(time);
            return;
        }
    }

}

/** xPath length funciton */
function xpL(query) {
    return document.evaluate(query, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
}

/** xPath function */
function xp(query) {
    return document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}

/* Decrypt the url result function */
function revC(ine) {
    var b64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = b64._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64
                } else if (isNaN(i)) {
                    a = 64
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
        },
        decode: function(e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r)
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i)
                }
            }
            t = b64._utf8_decode(t);
            return t
        },
        _utf8_encode: function(e) {
            e = e.replace(/rn/g, "n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r)
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128)
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128)
                }
            }
            return t
        },
        _utf8_decode: function(e) {
            var t = "";
            var n = 0;
            var r = c1 = c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    };
    return 'http://linkshrink.net/' + b64.decode(ine);
}