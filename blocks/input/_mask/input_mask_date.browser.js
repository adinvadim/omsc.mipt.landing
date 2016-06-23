modules.define(
    'input',
    ['i-bem__dom', 'jquery__inputmask'],
    function(provide, BEMDOM, $, Input) {

Input.decl({ block : this.name, modName : 'mask', modVal : 'date' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var self = this;
                $(this.elem('control')).inputmask("dd.mm.yyyy", {
                    "placeholder": "дд.мм.гггг",
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
        }
    },
});

provide(Input);
});
