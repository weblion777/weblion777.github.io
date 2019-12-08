function getParams () {
	var a = document.getElementsByTagName('script'), 
		b = a.length,
		options = {};
		
	while( b-- ) {
		if ( ~a[b].src.indexOf("hdvb_lord.js") ) {
			options = a[b].innerHTML.trim();
			if (options != '') {
				options = JSON.parse( options );
			}
		}
	}
	return options;
}

var hdvb_domain = 'vb17105quinnnash.pw';
var actual = 'https://vid' + Date.now() + '.' + hdvb_domain;

var kp;
var idIframe = false;

var params = getParams();

if (typeof params != 'undefined' && typeof params.idkp != 'undefined') {
	kp = params.idkp;
	
	if (typeof params.idIframe != 'undefined') {
		idIframe = params.idIframe;		
		idIframe = document.getElementById(idIframe) || false;		
	}
	
	var url = actual + '/api_system/urlApi.php?kp_id=' + kp;
	
	if (idIframe !== false) {
		idIframe.src = url;
	}
}
