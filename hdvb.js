!function() {

    var actual = 'https://vid' + Date.now() + '.tehranvd.biz',
        re = '^https?:\\/\\/(vii?dd?\\d*.)?{DOMAIN}',
        https = ['makrohd.(info|com|net)', 'hdvb.(cc|xyz)', 'videolishd.(net|com)',  'farsihd.(info)', 'tehranvd.(ru|su|net|com|org|pw|biz)', 'my\-serials.(info)'],
        list = [], delay = 200;

    function listForeach (callback) {
    	https.forEach(function (value, key) {
			if (typeof callback == 'function') {
				callback ( value, key );
			}
		});
    }

    function findFrame(callback) {
        if (document.body) 
        	return Array.prototype.find.call(document.body.getElementsByTagName('iframe'), callback);
    }

    listForeach(function($value) {
    	list.push(re.replace('{DOMAIN}', $value));
    });

    findFrame(function($value) {
    	Array.prototype.find.call(list, function($reg, $reg_key) {
			var cReg = new RegExp($reg);
			var l = $value.src.match(cReg);
			console.log($reg);
			if(l !== null) if(l.length > 0) $value.setAttribute('src', $value.src.replace(l[0], actual));
		});
    });

}()