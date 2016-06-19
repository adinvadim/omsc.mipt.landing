block('icon')(

    match(function() { return this.ctx.type })(
        def()(function() {
            this.mods = this.mods || {};
            this.mods.type = this.ctx.type;
            return applyNext();
        })
    )
)
