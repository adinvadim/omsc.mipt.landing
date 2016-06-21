block('accordion')(
    js()(true),

    content()(function() {
        var ctx = this.ctx;
        return ctx.options.map(item => {
            return {
                elem : 'item',
                content : [
                    {
                        elem : 'title',
                        content : item.title
                    },
                    {
                        elem : 'content',
                        content : item.content
                    }
                ]
            }
        })
    })
)
