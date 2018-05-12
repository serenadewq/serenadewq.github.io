 var url = 'http://www.serenadewq.win/photos/photos.json',
        baseUrl = 'https://raw.githubusercontent.com/serenadewq/serenadewq.github.io/hexo/photos/',
        smallFix = '_s.jpg',
        photo = $('#photos');

    //1.��ȡphoto.json
    $.getJSON(url,function(data){
        if( data ){
            var photos_adds = data.folder,
                photos_img = data.images,
                html = '';

            if( photos_adds.length>0 ){
                var length = photos_adds.length,
                    i = 0;

                for (i; i < length; i++) {
                    html += '<div class="row"><div class="photo_address"><h2>'+photos_adds[i]+'</h2></div><div class="photo_list"><ul>';

                    var len = photos_img[i].length,
                    j = 0;

                    if( len>0 ){
                        for (j; j < len; j += 2) {
                            var img_url = baseUrl + photos_adds[i] + '/' + photos_img[i][j];
                            var img_small = baseUrl + photos_adds[i] + '/' + photos_img[i][j] + smallFix;
                            html += '<li><div class="img-wrap"><a data-fancybox="images" href="'+img_url+'" ><img src="'+img_small+'"></a></div></li>';
                        }
                    }

                    html += '</ul></div></div>';
                }
                //��ֵ
                photo.html(html);
                //3.���ò��
                $("[data-fancybox]").fancybox({
                    loop: true
                });
                
            }
        }
    });

})();