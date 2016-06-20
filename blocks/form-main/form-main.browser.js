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

                this._form.on('submit', this._onSubmit.bind(this));
                this._form.on('change', this._onChange.bind(this));

                this._button = this.findBlockOn(this.elem('button'), 'button');

                this._form.validate()
                    .then(function(st) {
                        if (self._form.checkFields(st)) {
                            self._button.delMod('disabled')
                        } else {
                            self._button.setMod('disabled')
                        }
                    })

                //this._form.getFields()[1].setValidationMessage('required', 'Ololo!');
                //this._form.getFields()[0].setValidationMessages({
                //    required : 'FUCK!'
                //});

                //this._form.getFields()[2].setMod('disabled');
                //this._form.getFields()[0].setStatus('invalid');

                // You can bind to other form events

                // this._form.on('focus', function(e, data) {
                //     console.log('focused form', data);
                // });
            }
        }
    },

    _onSubmit: function(e, val) {
        console.log('form submit');
        //this._form.validate()
            //.then(function(status) {
                //console.log(status)
            //});
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
