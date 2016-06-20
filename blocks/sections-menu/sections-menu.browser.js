/**
 * @module sections-menu
 */

modules.define('sections-menu', ['i-bem__dom', 'jquery', 'page'], function(provide, BEMDOM, $, Page) {

/**
 * @exports
 * @class sections-menu
 * @bem
 */
provide(BEMDOM.decl(this.name,  /** @lends tabs.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._menu = this.findBlockOn('menu');
                this.bindTo('menu-item', 'click', this._onMenuItemClick.bind(this))
            }
        }
    },

    _onMenuItemClick: function(e) {
        var elem = $(e.target);
        var params = this.elemParams(elem);
        var section = $('.section[data-id=' + params.sectionId +']');
        if (section.length > 0) {
            $('html, body')
                .stop()
                .animate({ scrollTop : section.offset().top }, 1000);
        }
    }

}));

});
