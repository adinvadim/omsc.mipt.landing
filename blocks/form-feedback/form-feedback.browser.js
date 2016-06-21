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
                        url : '/mail/message.php',
                        method : 'POST',
                        headers : {
                            'HTTP_X_REQUESTED_WITH' : 'xmlhttprequest',
                        },
                        data : val
                    }).then(
                        function(result) {
                            self._form.elem('message').text('Ваш запрос успешно отправлен.');
                            self._form.setMod(self._form.elem('message'), 'success')
                        },
                        function(error) {
                            self._form.elem('message').text('Ошибка при отправке запроса.');
                            self._form.setMod(self._form.elem('message'), 'error');
                            console.warn(error);
                        })
                } else {
                    self._button.setMod('disabled');
                }
            })
    }

}));

});
