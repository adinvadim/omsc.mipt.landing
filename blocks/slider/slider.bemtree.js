block('slider')(
    match(function() { return this.ctx.data != null; })(
        content()(function() {
            var ctx = this.ctx,
                data = ctx.data;

            return [
                {
                    elem : 'slides',
                    content : data.slides.map(function(item) {
                        return {
                            block : 'slider',
                            elem : 'slide',
                            content : [
                                {
                                    block : 'link',
                                    url : item.url,
                                    title : item.title,
                                    mix : {
                                        block : 'slider',
                                        elem : 'slide-background-wrapper'
                                    },
                                    content : {
                                        block : 'slider',
                                        elem : 'slide-image',
                                        js : {
                                            image : item.image
                                        },
                                    }
                                },
                                {
                                    block : 'slider',
                                    elem : 'slide-content-wrapper',
                                    mix : {
                                        block : 'page',
                                        elem : 'row'
                                    },
                                    content : {
                                        block : 'slider',
                                        elem : 'slide-content',
                                        content : [
                                        {
                                            block : 'slider',
                                            elem : 'slide-title',
                                            mix : {
                                                block : 'title',
                                                mods : { level : 1 }
                                            },
                                            content : item.title,
                                        },
                                        {
                                            block : 'slider',
                                            elem : 'slide-text',
                                            content : item.text
                                        }
                                        ]
                                    }
                                }
                            ]
                        };
                    })
                },
                {
                    elem : 'footer',
                    mix : {
                        block : 'page',
                        elem : 'row'
                    },
                    content : {
                        elem : 'controls',
                        content : [
                            {
                                elem : 'button-prev'
                            },
                            {
                                elem : 'pagination',
                            },
                            {
                                elem : 'button-next'
                            }
                        ]
                    }
                }
            ];
        })
    )
);
