modules.define(
    'input',
    ['i-bem__dom', 'jquery__inputmask'],
    function(provide, BEMDOM, $, Input) {

Input.decl({ block : this.name, modName : 'mask', modVal : 'date' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                $(this.elem('control')).inputmask("d.m.y", { "placeholder": "дд.мм.гггг" });

            }
        }
    },

});

provide(Input);
});
