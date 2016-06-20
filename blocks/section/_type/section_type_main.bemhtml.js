block('section').mod('type', 'main')(
    content()(function() {
        return [
            {
                block : 'section',
                elem : 'overlay'
            },
            applyNext()
        ]
    })
)
