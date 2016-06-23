modules.define(
    'input',
    ['i-bem__dom', 'jquery__inputmask'],
    function(provide, BEMDOM, $, Input) {

Input.decl({ block : this.name, modName : 'mask', modVal : true }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var self = this;
                var mask = this.params['mask'];
                $(this.elem('control')).inputmask(mask, {
                    oncomplete : function() {
                        var val = self.elem('control').val();
                        self.setVal(val);
                    },
                    onincomplete : function() {
                        self.setVal('');
                    }
                });
                this.setVal('');

            }
        },

    },

});

provide(Input);
});
