block('partner-card')(

    content()(function() {
        var ctx = this.ctx;
        return [
            {
                elem : 'title',
                content : ctx.title
            },
            {
                elem : 'img-wrapper',
                content : {
                    block : 'image',
                    url : ctx.imgUrl,
                    mix : { block : 'partner-card', elem : 'image' }
                }
            }
        ];
    })

)
