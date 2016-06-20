block('section-title')(
    content()(function() {
        var ctx = this.ctx;
        return [
            ctx.icon && {
                block : 'icon',
                type : ctx.icon
            },
            {
                block : 'title',
                mix : { block : this.block, elem : 'title' },
                level : 2,
                content : applyNext()
            }
        ]
    })
)
