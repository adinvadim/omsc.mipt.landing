block('form-feedback')(

    js()(true),
    
    elem('info')(

        content()(function() {
            var ctx = this.ctx;
            return ctx.info.map(item => {
                return {
                    elem : 'info-item',
                    content : [
                        {
                            elem : 'info-title',
                            content : item.title
                        },
                        {
                            elem : 'info-content',
                            content : item.content
                        }
                    ]
                }
            })
        })



    elem('info-item').mix()({
        block : 'row',
        elem : 'col',
        elemMods : { sw : 4 }
    })
)
