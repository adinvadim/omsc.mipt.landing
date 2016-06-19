block('slider')(

    js()(true),

    cls()('swiper-container'),

    elem('slides').cls()('swiper-wrapper'),

    elem('slide').cls()('swiper-slide'),

    elem('pagination').cls()('swiper-pagination'),

    elem('next-button').cls()('swiper-button-next'),

    elem('prev-button').cls()('swiper-button-prev'),

    elem('person').content()(function() {
        var ctx = this.ctx,
            person = ctx.person;
        return [
            {
                elem : 'avatar-wrapper',
                content : {
                    block : 'image',
                    mix : { block : 'slider', elem : 'avatar' },
                    src : person.imgUrl,
                    alt : person.name
                },
            },
            {
                elem : 'person-info',
                content : [
                    {
                        elem : 'person-name',
                        content : person.name
                    },
                    {
                        elem : 'person-about',
                        content : person.about
                    }
                ]
            }
        ]
    })
);
