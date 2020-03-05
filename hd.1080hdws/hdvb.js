!function() {

        var actual = 'https://vid' + Date.now() + '.vb17109nadiapattel.pw',
        re = '^https?:\\/\\/(vii?dd?\\d*.)?{DOMAIN}',
        https = ["makrohd.(info|com|net)","hdvb.(cc|xyz)","videolishd.(net|com)","farsihd.(info|pw)","tehranvd.(ru|su|net|com|org|pw|biz)","my-serials.(info)", "vb17102bernardjordan.(pw)", "vb17100astridcoleman.(pw)", "vb17101tesswalton.(pw)", "vb17103elmerwatson.(pw)", "vb17104alfredcurry.(pw)", "vb17105quinnnash.(pw)", "vb17106cecilgregory.(pw)", "vb17107rexhammond.(pw)", "vb17108janenoble.(pw)", "vb17109nadiapattel.(pw)"],
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
          return Array.prototype.find.call(document.querySelectorAll('[data-url]'), callback);
    }

    listForeach(function($value) {
      list.push(re.replace('{DOMAIN}', $value));
    });

    findFrame(function($value) {
      Array.prototype.find.call(list, function($reg, $reg_key) {
      var cReg = new RegExp($reg);
      var l = $value.attributes['data-url'].nodeValue.match(cReg);
      console.log(l);
      if(l !== null) if(l.length > 0) $value.setAttribute('data-url', $value.attributes['data-url'].nodeValue.replace(l[0], actual));
    });
    });

}()
