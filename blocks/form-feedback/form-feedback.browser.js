/**
 * @module form-main
 */
modules.define('form-feedback',
    ['i-bem__dom'],
    function(provide, BEMDOM) {
/**
 * form-main block
 */
provide(BEMDOM.decl(this.name, /** @lends app.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                var self = this;
                this._form = this.findBlockInside('form');

                this._form.on('submit', this._onSubmit.bind(this));
                this._form.on('change', this._onChange.bind(this));

                this._button = this.findBlockOn(this.elem('button'), 'button');

            }
        }
    },

    _onSubmit: function(e, val) {
        var self = this;
        this._form.validate()
            .then(function(st) {
                if (self._form.checkFields(st)) {
                    $.ajax({
                        url : '/mipt/message.php',
                        method : 'POST',
                        headers : {
                            'HTTP_X_REQUESTED_WITH' : 'xmlhttprequest',
                        },
                        data : val
                    });
                } else {
                    self._button.setMod('disabled');
                }
            })
    },


    _onChange: function(e, val) {
        var self = this;
        this._form.validate()
            .then(function(st) {
                if (self._form.checkFields(st)) {
                    self._button.delMod('disabled');
                } else {
                    self._button.setMod('disabled');
                }
            })
    }

}));

});
