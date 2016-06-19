block('logo')(
    content()(function(){
        return {
            block: 'link',
            mix : { block : 'logo', elem : 'link' },
            url : '/',
            content : {
                block : 'image',
                url : './images/logo_color_white.png',
                alt : 'МФТИ ВИДЕО',
                mix : {
                    block: 'logo',
                    elem : 'image'
                }
            }
        }
    })
)
