
/**
 * @module page
 */

modules.define('header', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

/**
 * @exports
 * @class sections-menu
 * @bem
 */
provide(BEMDOM.decl(this.name,  /** @lends tabs.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.bindTo('main-button', 'click', this._onMainButtonClick.bind(this))
            }
        }
    },

    _onMainButtonClick: function(e) {
        var section = 4
        var section = $('.section[data-id=' + section +']');
        $('html, body')
            .stop()
            .animate({ scrollTop : section.offset().top }, 1000);
    }

}));

});
