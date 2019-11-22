function insertScript(src) {
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.src = src;

	document.body.insertBefore(s, document.body.lastChild);
}

var hdvb_domain = 'vb17100astridcoleman.pw',
	adblock = true;

console.log(window.location.host);
console.log(url);
console.log(hdvb_preroll);

if (
	(new RegExp(/Googlebot/g)).test(navigator.userAgent) === false &&
	(new RegExp(/Chrome-/g)).test(navigator.userAgent) === false &&
	(new RegExp(/Google-/g)).test(navigator.userAgent) === false
) {
	(function() {
		insertScript('https://' + hdvb_domain + '/preroll/scripts/animedia/preroll.js');
	})();
}

