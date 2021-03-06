/**
 * @module form-main
 */
modules.define('form-main',
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
                this._button = this.findBlockInside('button');

                this._form.on('submit', this._onSubmit.bind(this));


            }
        }
    },

    _onSubmit: function(e, val) {
        var self = this;
        this._form.validate()
            .then(function(st) {
                if (self._form.checkFields(st)) {
                    $.ajax({
                        url : '/mail/application.php',
                        method : 'POST',
                        headers : {
                            'HTTP-X-REQUESTED-WITH' : 'xmlhttprequest',
                        },
                        data : val
                    }).then(
                        function(result) {
                            if (result === '1') {
                                self._form.elem('message').text('Ваш запрос успешно отправлен.');
                                self._form.setMod(self._form.elem('message'), 'success')

                                ga('send', {
                                  hitType: 'event',
                                  eventCategory: 'Registration',
                                  eventAction: 'Click',
                                  eventLabel: 'main'
                                });

                            } else {
                                self._form.elem('message').text('Ошибка при отправке запроса.');
                                self._form.setMod(self._form.elem('message'), 'error');
                                console.warn(result);
                            }

                        },
                        function(error) {
                            self._form.elem('message').text('Ошибка при отправке запроса.');
                            self._form.setMod(self._form.elem('message'), 'error');
                            console.warn(error);
                        })
                } else {
                    self._form.elem('message').text('Для отправки заполните выделенные поля.')
                    self._form.setMod(self._form.elem('message'), 'error');
                }
            })
    }

    //_onChange: function(e, val) {
        //var self = this;
        //this._form.validate()
            //.then(function(st) {
                //if (self._form.checkFields(st)) {
                    //self._button.delMod('disabled');
                //} else {
                    //self._button.setMod('disabled');
                //}
            //})
    //}

}));

});
