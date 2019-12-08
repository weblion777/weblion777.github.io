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

window.onload = function () {
	
	var hdvb_kp;
	var hdvb_id 	= false;
	var hdvb_width 	= '100%';
	var hdvb_height = '100%';

	var params = getParams();	

	if (typeof params != 'undefined' && typeof params.idkp != 'undefined') {
		hdvb_kp = params.idkp;
		
		if (typeof params.id != 'undefined') {
			hdvb_id = params.id;		
			hdvb_id = document.getElementById(hdvb_id) || false;		
		}
		
		if (typeof params.width != 'undefined') {
			hdvb_width = params.width;		
		}
		
		if (typeof params.height != 'undefined') {
			hdvb_height = params.height;		
		}
		
		var url = actual + '/api/idkp?kp_id=' + hdvb_kp;
		
		if (hdvb_id !== false) {			
			var iframe = '<iframe width="'+hdvb_width+'" height="'+hdvb_height+'" src="'+url+'"></iframe>';
			hdvb_id.innerHTML = iframe;
		}
	}			
}
