/**
 * @module steps
 */

modules.define('steps', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

/**
 * @exports
 * @class steps
 * @bem
 */
provide(BEMDOM.decl(this.name,  /** @lends tabs.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._tabs = this.findBlockInside('tabs');
                this.bindTo('next-button', 'click', this._onNextButtonClick.bind(this));
                this.bindTo('prev-button', 'click', this._onPrevButtonClick.bind(this));
            }
        }
    },

    _onNextButtonClick: function(e) {
        this._tabs.changeTab(parseInt(this._tabs.getActive()) + 1);
    },

    _onPrevButtonClick: function(e) {
        this._tabs.changeTab(parseInt(this._tabs.getActive()) - 1);
    }

}));

});
