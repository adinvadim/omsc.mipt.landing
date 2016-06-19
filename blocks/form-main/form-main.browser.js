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
                this._form = this.findBlockInside('form');

                this._form.on('submit', this._onSubmit.bind(this));

                this._button = this.findBlockOn(this.elem('button'), 'button');

                //this._form.getFields()[1].setValidationMessage('required', 'Ololo!');
                //this._form.getFields()[0].setValidationMessages({
                //    required : 'FUCK!'
                //});

                //this._form.getFields()[2].setMod('disabled');
                //this._form.getFields()[0].setStatus('invalid');

                // You can bind to other form events
                 this._form.on('change', function(e, data) {
                     console.log(data)
                     this._form.validate()
                         .then(function(statuses) {
                            if (this._form.checkFields(statuses)) {
                                this._button.delMod('disabled');
                            } else {
                                this._button.setMod('disabled');
                            }
                         })
                 });

                // this._form.on('focus', function(e, data) {
                //     console.log('focused form', data);
                // });
            }
        }
    },

    _onSubmit: function(e, val) {
        console.log('submit');
        //this._form.validate()
            //.then(function(status) {
                //console.log(status)
            //});
    }

}));

});
