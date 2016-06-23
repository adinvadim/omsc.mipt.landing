modules.define(
    'input',
    ['i-bem__dom', 'jquery__inputmask'],
    function(provide, BEMDOM, $, Input) {

Input.decl({ block : this.name, modName : 'mask', modVal : true }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var mask = this.params['mask']
                $(this.elem('control')).inputmask(mask);

            }
        }
    },

});

provide(Input);
});
