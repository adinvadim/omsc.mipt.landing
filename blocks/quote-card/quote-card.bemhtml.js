block('quote-card')(
    content()(function() {
        var ctx = this.ctx;
        return [
            {
                elem : 'content',
                content : applyNext()
            },
            {
                elem : 'footer',
                content : [
                    {
                        elem : 'author',
                        content : ctx.author
                    },
                    {
                        elem : 'author-info',
                        content : ctx.authorInfo
                    }
                ]
            }
        ]
    })
)
