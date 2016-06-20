
modules.define('accordion', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    beforeElemSetMod: {
        'item' : {
            'active' : {
                'true' : function(elem) {
                    return !this.hasMod(elem, 'disabled');
                }
            }
        }
    },
    onSetMod: {
        'js' : {
            'inited' : function() {
                this._current = this.findElem('item', 'active', true);
                this.bindTo('title', 'click', function(e) {
                    console.log('click on title');
                    var item = $(e.currentTarget).parents(this.buildSelector('item'));
                    this.setMod(item, 'active', true);
                }, this);
            }
        }
    },
    onElemSetMod: {
        'item' : {
            'active' : {
                'true' : function(elem) {
                    this.delMod(this._current, 'active');
                    this._current = elem;
                    elem.closest('content').slideDown('normal');
                },
                '' : function (elem) {
                    elem.closest('content').slideUp('normal');
                }
            }
        }
    }
}));

});
