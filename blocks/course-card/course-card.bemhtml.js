block('course-card')(
    content()(function() {
        var ctx = this.ctx;
        return [
            {
                elem : 'image-wrapper',
                content : {
                    block : 'image',
                    url : ctx.imgUrl,
                    alt : ctx.title,
                    mix : { block : 'course-card', elem : 'image' }
                },
            },
            {
                elem : 'title',
                content : ctx.title
            }
        ]
    })
)
