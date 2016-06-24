var data = {
    menu : require('./data/menu'),
    originality : require('./data/originality'),
    teachers : require('./data/techers.js'),
    faq : require('./data/faq.js'),
    partners : require('./data/partners.js')
}

module.exports = {
    block : 'page',
     title : 'Онлайн-магистратура по современной комбинаторике',
     favicon : './favicon.ico',
     head : [
         { elem : 'meta', attrs : { name : 'description', content : '' } },
         { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
         { elem : 'css', url : 'index.min.css' }
     ],
     scripts: [
         { elem : 'js', url : 'index.min.js' },
         { elem : 'js', url : 'http://maps.googleapis.com/maps/api/js?key=AIzaSyAcN-J2m9WVmklUP39w67o7tcHHRltlh3k'},
         { elem : 'js', content : `
         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-79812804-1', 'auto');
          ga('send', 'pageview');
        `}
     ],
     content : [
        {
            block : 'section',
            mods : { type : 'main' },
            content : {
                block : 'header',
                content : [
                    {
                        block : 'row',
                        content : {
                            elem : 'col',
                            elemMods : { sw : 12 },
                            mix : { block : 'header', elem : 'content' },
                            content : [
                                {
                                    block : 'sections-menu',
                                    mix : { block : 'header', elem : 'menu' },
                                    content : data.menu.map(item => {
                                        return {
                                            elem : 'menu-item',
                                            content : item.name,
                                            elemMods : { active : item.active },
                                            js : {
                                                sectionId : item.sectionId
                                            },
                                            mix : [
                                                { block : 'menu-item', js : true },
                                                { block : 'header', elem : 'menu-item'},
                                            ]
                                        }
                                    })
                                },
                                {
                                    block : 'logo',
                                    mix : {
                                        block : 'header',
                                        elem : 'logo'
                                    }
                                },
                                {
                                    block : 'header',
                                    elem : 'title',
                                    content : 'Современная комбинаторика'
                                },
                                {
                                    block : 'text',
                                    mix : { block : 'header', elem : 'text' },
                                    content : `Первая в Росии онлайн-магистратура от одного из лучших вузов страны`,
                                },
                                {
                                    block : 'button',
                                    mods : { view : 'second', size : 'l' },
                                    mix : { block : 'header', elem : 'main-button' },
                                    content : 'Подать документы'
                                },

                            ]
                        }
                    }, /* row end */
                ],

            }
        }, /* section_type_main end */
        {
            block : 'section',
            content : [
                {
                    block : 'row',
                    content : [{
                        block : 'section-title',
                        content : 'О магистратуре',
                        icon : 'about'
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12 , lw : 4},
                        content : {
                            block : 'quote-card',
                            content : `«Сейчас — как раз
                                то самое время, когда настоящее прямо
                                на наших глазах превращается
                                в будущее.»`,
                            author : 'Айзек Азимов',
                            authorInfo : 'писатель-фантаст , популяризатор науки'
                        }

                    }, {
                        elem : 'col',
                        elemMods : { sw: 12, lw : 7, lo : 1  },
                        content : [
                            {
                                tag : 'p',
                                content : `В 2015 году Агентство стратегических инициатив выпустило обновленный Атлас новых профессий. Более 90% профессий будут требовать системного мышления,
                                а также знаний и навыков, напрямую связанных с математической наукой. Кроме того, уже сейчас для большинства специальностей в ИТ-сфере знания в  математике просто необходимы , например, при проектировании нейроинтерфейсов.`,
                            },
                            {
                                tag : 'p',
                                content : `Физтех предоставляет уникальную возможность пройти онлайн-обучение по комбинаторике. Подготовка студентов в рамках магистратуры не ограничивается только техническими предметами, взращивая специалистов, с одной стороны, обладающих фундаментальными знаниями, а с другой стороны, способных развиваться в разных направлениях.`
                            }
                        ]
                    }],
                }, /* row end */
                {
                    block : 'row',
                    content : [{
                        block : 'section-title',
                        content : 'Уникальность',
                        icon : 'originality'
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 4}
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 7, lo : 1 },
                        content : data.originality

                    }]
                }, /* row end */
                {
                    block : 'row',
                    content : [{
                        block : 'section-title',
                        content : 'Диплом',
                        icon : 'diplom'
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 4}
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 7, lo : 1 },
                        content : {
                            tag : 'p',
                            content : [
                                'Выдается ',
                                {
                                    tag : 'b',
                                    content : 'диплом МФТИ государственного образца '
                                },
                                'после успешной защиты квалификационной работы магистра.'
                            ]
                        }
                    }]
                }, /* row end */
                {
                    block : 'row',
                    content : [{
                        block : 'section-title',
                        content : 'Трудоустройство',
                        icon : 'employment'
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 4}
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 7, lo : 1 },
                        content : {
                            tag : 'p',
                            content : `Студенты МФТИ, чаще всего, трудоустраиваются уже в процессе обучения.
                                Не является исключением и онлайн-магистратура. Основные области, в которых применимы полученные знания и навыки — IT сектор, страхование, банковская сфера. После прохождения данной магистратуры вы сможете работать
                                в крупнейших компаниях: Сбербанк, Yandex, ABBYY.`
                        }
                    }]
                }, /* row end   */

            ]
        }, /* section end */
        {
            block : 'section',
            mods : { color : 'main' },
            content : {
                block : 'row',
                mods : { sac : true },
                content : [
                    {
                        elem : 'col',
                        elemMods : { sw : 12 },
                        content : [
                            {
                                block : 'title',
                                level : 2,
                                content : 'Курсы программы',
                                mix : { block : 'section', elem : 'title' }
                            }
                        ]
                    },
                    {
                        block : 'tabs',
                        mods : { view : 'courses' },
                        tabs : [
                            {
                                title : 'Общие курсы',
                                mix : { block : 'row', mods : { sac : true } },
                                content : [{
                                    imgUrl : './images/english_for_math.jpg',
                                    title : 'Английский язык для математиков'
                                }, {
                                    imgUrl : './images/philosophiya_nauki.jpg',
                                    title : 'Философия науки'
                                }].map(item => {
                                    return {
                                        block : 'course-card',
                                        title : item.title,
                                        imgUrl : item.imgUrl,
                                        mix : {
                                            block : 'row',
                                            elem : 'col',
                                            elemMods : { sw : 3 },
                                        }
                                    }
                                })
                            },
                            {
                                title : 'Вводные курсы',
                                mix : { block : 'row', mods : { sac : true } },
                                content : [{
                                    title : 'Комбинаторика',
                                    imgUrl : './images/cobminatorika.jpg'
                                }, {
                                    title : 'Теория графов',
                                    imgUrl : './images/th_graphs.jpg'
                                }, {
                                    title : 'Теория вероятностей',
                                    imgUrl : './images/th_veroyatnostey.jpg'
                                }].map(item => {
                                    return {
                                        block : 'course-card',
                                        title : item.title,
                                        imgUrl : item.imgUrl,
                                        mix : {
                                            block : 'row',
                                            elem : 'col',
                                            elemMods : {  sw : 3 },
                                        }
                                    }
                                })
                            },
                            {
                                title : 'Прикладные курсы',
                                checked : true,
                                mix : { block : 'row', mods : { sac : true } },
                                content : [{
                                    imgUrl : './images/th_games.jpg',
                                    title : 'Теория игр'
                                }, {
                                    imgUrl : './images/th_code.jpg',
                                    title : 'Теория кодирования'
                                }, {
                                    imgUrl : './images/web_graphs.jpg',
                                    title : 'Веб-графы и инструменты работы с ними'
                                }, {
                                    imgUrl : './images/ligvist_internet.jpg',
                                    title : 'Лигвистика Интернета'
                                }].map(item => {
                                    return {
                                        block : 'course-card',
                                        title : item.title,
                                        imgUrl : item.imgUrl,
                                        mix : {
                                            block : 'row',
                                            elem : 'col',
                                            elemMods : {  sw : 3 },
                                        }
                                    }
                                }),
                            },
                            {
                                title : 'Специализированные курсы',
                                mix : { block : 'row', mods : { sac : true } },
                                content : [{
                                    imgUrl : './images/th_random_graph.jpg',
                                    title : 'Теория случайных графов',
                                }, {
                                    title : 'Аддитивная комбинаторика',
                                    imgUrl : './images/additive_comb.jpg'
                                }, {
                                    title : 'Дополнительные главы теории случайных графов',
                                    imgUrl : './images/dop_glavi.jpg'
                                }, {
                                    title : 'Углубленный курс теории графов',
                                    imgUrl : './images/senior_th_graph.jpg'

                                }].map(item => {
                                    return {
                                        block : 'course-card',
                                        title : item.title,
                                        imgUrl : item.imgUrl,
                                        mix : {
                                            block : 'row',
                                            elem : 'col',
                                            elemMods : {  sw : 3 },
                                        }
                                    }
                                })
                            }
                        ]
                    }
                ]
            } /* row end */
        }, /* section end */
        {
            block : 'section',
            mods : { color : 'grey' },
            content : [{
                block : 'row',
                mods : { sac : true },
                content : {
                    elem : 'col',
                    elemMods : { sw : 12 },
                    content : {
                        block : 'title',
                        level : 2,
                        mix : { block : 'section', elem : 'title' },
                        content : 'Наши преподаватели'
                    }
                },
            },{
                block : 'slider',
                content : [
                    {
                        elem : 'slides',
                        content : data.teachers.map(item => {
                            return {
                                block : 'slider',
                                elem : 'slide',
                                content : {
                                    block : 'row',
                                    mix : { block : 'slider', elem : 'slide-content' },
                                    content : [
                                        {
                                            block : 'slider',
                                            elem : 'person',
                                            person : item.person,
                                            mix : { block : 'row', elem : 'col', elemMods :  { sw : 12,  lw : 4} }
                                        },
                                        {
                                            block : 'slider',
                                            elem : 'content',
                                            content : item.text,
                                            mix : { block : 'row', elem : 'col', elemMods : { sw : 12, lw: 7, lo : 1 } }
                                        }
                                    ]
                                }
                            }
                        })
                    },
                    {
                        elem : 'footer',
                        content : {
                            elem : 'pagination'
                        }
                    },
                    {
                        elem : 'next-button'
                    },
                    {
                        elem : 'prev-button'
                    }
                ]
            }]
        },
        {
            block : 'section',
            content : [
                {
                    block : 'row',
                    content : [{
                        block : 'section-title',
                        content : 'Как поступить',
                        icon : 'how-to'
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 4}
                    }, {
                        elem : 'col',
                        elemMods : { sw : 12, lw : 7, lo : 1  },
                        content : [
                        {
                            tag : 'p',
                            content : [
                                'Подача документов осуществляется с ',
                                { tag : 'b', content : '20 июня 2016', },
                                ' по ',
                                { tag : 'b', content : '10 августа 2016' },
                            ]
                        },
                        {
                            tag : 'p',
                            content : [
                                'По итогам экзаменов и собеседований будут отобраны ',
                                { tag : 'b', content : '10 студентов. ' }
                            ]
                        },
                        {
                            tag : 'p',
                            content : [
                                'Обучение по программе ведется на платной основе, но есть возможность получить ',
                                { tag : 'b', content : 'грант на обучение'},
                                '.'
                            ]
                        }, {
                            tag : 'p',
                            content : 'Для участия в конкурсе на поступление в рамках данной экспериментальной программы вам необходимо:'
                        }, {
                            tag : 'p',
                            content : [
                                { tag : 'b', content : 'Шаг 1. ', },
                                'Заполнить форму для участия в конкурсе. В ответ на заявку вы получите электронное письмо с дополнительными инструкциями и разъяснениями'
                            ]
                        }, {
                            block : 'form-main',
                            content : {
                                block : 'form',
                                content : [
                                    {
                                        block : 'form-field',
                                        mix : { block : 'form-main', elem : 'form-field'},
                                        mods : { type : 'input', required : true },
                                        name : 'lastname',
                                        content : {
                                            block : 'input',
                                            placeholder : 'Фамилия'
                                        }
                                    },
                                    {
                                        block : 'form-field',
                                        mix : { block : 'form-main', elem : 'form-field' },
                                        mods : { type : 'input', required : true },
                                        name : 'firstname',
                                        content : {
                                            block : 'input',
                                            placeholder : 'Имя'
                                        }
                                    },
                                    {
                                        block : 'form-field',
                                        mix : { block : 'form-main', elem : 'form-field' },
                                        mods : { type : 'input', required : true },
                                        name : 'secondname',
                                        content : {
                                            block : 'input',
                                            placeholder : 'Отечество'
                                        }
                                    },
                                    {
                                        block : 'form-main',
                                        elem : 'combo',
                                        content : [{
                                            block : 'form-field',
                                            mix : { block : 'form-main', elem : 'form-field' },
                                            name : 'birthdate',
                                            mods : { type : 'input', required : true },
                                            content : {
                                                block : 'input',
                                                mods: { mask : 'date' },
                                                placeholder : 'Дата рождения'
                                            }
                                        }, {
                                            block : 'form-field',
                                            mix : { block : 'form-main', elem : 'form-field' },
                                            name : 'phone',
                                            mods : { type : 'input', required : true },
                                            content : {
                                                block : 'input',
                                                placeholder : 'Телефон',
                                                mods : { mask : true },
                                                js : {
                                                    mask : '+7(999)9999999'
                                                }
                                            }
                                        }, {
                                            block : 'form-field',
                                            mix : { block : 'form-main', elem : 'form-field' },
                                            name : 'email',
                                            mods : { type : 'input', required : true, validate : 'email' },
                                            content : {
                                                block : 'input',
                                                placeholder : "E-mail"
                                            }
                                        }]
                                    },
                                    {
                                        block : 'form-main',
                                        elem : 'footer',
                                        content : [
                                            {
                                                block : 'form',
                                                elem : 'message',
                                                mix : { block : 'form-main', elem : 'message'},
                                                content : ''
                                            },

                                            {
                                                block : 'button',
                                                mods : {
                                                    view : 'main',
                                                    size : 'm',
                                                    type : 'submit',
                                                },
                                                mix : [
                                                    { block : 'form-main', elem : 'button' }
                                                ],
                                                content : 'Отправить'
                                            }
                                        ]
                                    }
                                ]
                            }
                        }, {
                            tag : 'p',
                            content : [
                                { tag : 'b', content : 'Шаг 2. ', },
                                { block : 'link', url : 'https://pk.mipt.ru/apply/', content: 'Подать заявление '},
                                ' на обучение в магистратуре МФТИ.'
                            ]
                        }, {
                            tag : 'p',
                            content : [
                                { tag : 'b', content : 'Шаг 3. ' },
                                'Сдать экзамены и пройти собеседование. Все подробности вы также получите в ответном письме после заполнения формы из Шага 1.',
                            ]
                        }]
                    }]
                },
            ]
        }, /* section end */
        {
            block : 'section',
            mods : { type : 'faq' },
            content : {
                block : 'row',
                content : [{
                    block : 'section-title',
                    content : 'FAQ',
                    icon : 'employment'
                }, {
                    elem : 'col',
                    elemMods : { sw : 12, lw : 4}
                }, {
                    elem : 'col',
                    elemMods : { sw : 12, lw : 7, lo : 1 },
                    content : {
                        block : 'faq',
                        content : data.faq.map(item => {
                            return {
                                elem : 'item',
                                content : [
                                    {
                                        elem : 'question',
                                        content : item.title
                                    },
                                    {
                                        elem : 'answer',
                                        content : item.content
                                    }
                                ]
                            }
                        })
                    }
                }]
            }
        },
        {
            block : 'section',
            mods : { color : 'grey' },
            content : {
                block : 'row',
                mods : { sac : true },
                content : [
                    {
                        elem : 'col',
                        elemMods : { sw : 12 },
                        content : {
                            block : 'title',
                            level : 2,
                            mix : { block : 'section', elem : 'title' },
                            content : 'Партнеры программы'
                        }
                    },
                    data.partners.map(item => {
                        return {
                            block : 'partner-card',
                            title : item.title,
                            imgUrl : item.imgUrl,
                            mix : { block : 'row', elem : 'col', elemMods : { sw : 12, mw : 4, lw : 3 } }
                        }
                    })
                ]
            }
        }, /* section  partners end */
        {
            block : 'section',
            mods : { type : 'maps' },
            content : [
                {
                    block : 'google-maps-bg',
                    js : true
                },
                {
                    block : 'form-feedback',
                    content : {
                        elem : 'inner',
                        content : {
                            block : 'form',
                            content : [
                                {
                                    block : 'form-feedback',
                                    elem : 'header',
                                    content : 'Есть вопросы или пожелания? Напишите нам или позвоните!'
                                },
                                {
                                    block : 'form-field',
                                    mods : { type : 'input', required : true },
                                    name : 'name',
                                    content : { block : 'input', placeholder : 'Имя' }
                                },
                                {
                                    block : 'form-field',
                                    mods : { type : 'input', required : true, validate : 'email' },
                                    name : 'email',
                                    content : { block : 'input', placeholder : 'E-mail' },
                                },
                                {
                                    block : 'form-field',
                                    mods : { type : 'input', required : true },
                                    name : 'message',
                                    content : { block : 'input', placeholder : 'Сообщение'}
                                },
                                {
                                    block : 'form-feedback',
                                    elem : 'footer',
                                    content : [{
                                        block : 'form',
                                        elem : 'message',
                                        mix : { block : 'form-feedback', elem : 'message'},
                                        content : ''
                                    }, {
                                        block : 'button',
                                        mods : { view : 'second', size : 'm', type : 'submit' },
                                        content : 'Отправить'
                                    }, {
                                        block : 'form-feedback',
                                        elem : 'info',
                                        info : [{
                                            title : 'Адрес:',
                                            content : '141701, Московская облаcть, г. Долгопрудный, Институтский пер., 9',
                                        }, {
                                            title : 'Телефон:',
                                            content : '+7 (499) 110 67 03'
                                        }, {
                                            title : 'E-mail:',
                                            content : 'omsc@phystech.edu'
                                        }]
                                    }]
                                }
                            ]
                        }
                    }
                }

            ]
        },
        {
            block : 'section',
            mods : { color : 'dark' },
            content : {
                block : 'footer',
                mix : { block : 'row' },
                content : [
                    {
                        block : 'sections-menu',
                        mix : [
                            { block : 'footer', elem : 'menu' },
                            { block : 'row', elem : 'col', elemMods : { sw : 12 } }
                        ],
                        content : data.menu.map(item => {
                            return {
                                elem : 'menu-item',
                                content : item.name,
                                elemMods : { active : item.active },
                                js : {
                                    sectionId : item.sectionId
                                },
                                mix : [
                                    { block : 'menu-item', js : true },
                                    { block : 'footer', elem : 'menu-item'},
                                ]
                            }
                        })
                    },
                    {
                        elem : 'copyright',
                        mix : { block : 'row', elem : 'col', elemMods : { sw : 12 } },
                        content : 'Copyright @ 2016 Онлайн-магистратура'
                    }
                ]
            }
        } /* section footer end */
     ]
};
