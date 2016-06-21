modules.define(
    'slider',
    ['i-bem__dom', 'swiper', 'jquery'],
    function(provide, BEMDOM, Swiper, $) {

provide(BEMDOM.decl(this.name,
{
    onSetMod : {
        'js' : {
            'inited' : function() {
                var self = this;
                this._swiper = new Swiper(this.buildSelector(), {
                    loop : true,
                    pagination : this.buildSelector('pagination'),
                    paginationClickable : true,
                    speed : 1000,
                    autoplay : 2500,
                    effect : 'fade',
                    nextButton : '.swiper-button-next',
                    prevButton : '.swiper-button-prev'
                });
            }
        }
    }
}));

});
