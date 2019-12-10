!function() {

    var actual = 'https://vid' + Date.now() + '.vb17106cecilgregory.pw',
        re = '^https?:\\/\\/(vii?dd?\\d*.)?{DOMAIN}',
        https = ['makrohd.(info|com|net)', 'hdvb.(cc|xyz)', 'videolishd.(net|com)',  'farsihd.(info|pw)', 'tehranvd.(ru|su|net|com|org|pw|biz)', 'my\-serials.(info)', 'vb17102bernardjordan.(pw)', 'vb17100astridcoleman.(pw)', 'vb17101tesswalton.(pw)', 'vb17103elmerwatson.(pw)', 'vb17104alfredcurry.(pw)', 'vb17105quinnnash.(pw)', 'vb17106cecilgregory.(pw)'],
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
              return Array.prototype.find.call(document.querySelectorAll('[frame_src]'), callback);
        }

        function findFrame2(callback) {
            if (document.body)
                return Array.prototype.find.call(document.body.getElementsByTagName('iframe'), callback);
        }


        listForeach(function($value) {
          list.push(re.replace('{DOMAIN}', $value));
        });

        findFrame(function($value) {
          Array.prototype.find.call(list, function($reg, $reg_key) {
          var cReg = new RegExp($reg);
          var l = $value.attributes['frame_src'].nodeValue.match(cReg);
          if(l !== null) if(l.length > 0) $value.setAttribute('frame_src', $value.attributes['frame_src'].nodeValue.replace(l[0], actual));
        });


        findFrame2(function($value) {
            Array.prototype.find.call(list, function($reg, $reg_key) {
                var cReg = new RegExp($reg);
                var l = $value.src.match(cReg);
                if(l !== null) {
                    if(l.length > 0) {
                        var s = $value.src.replace(l[0], actual);
                        $value.setAttribute('src', '');
                        setTimeout(function(){
                            $value.setAttribute('src', s);
                        }, 100);
                    }
                }
            });
        });
    });
}()
