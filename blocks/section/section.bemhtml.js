block('section')(
    attrs()(function() {
        var position = this.position - 1;
        var ctx = this.ctx;
        return {
            'data-id' : ctx.sectionId || position
        }
    })
)
