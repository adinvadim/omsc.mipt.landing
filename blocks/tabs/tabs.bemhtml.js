block('tabs')(
    js()(true),

    content()(function() {
        var ctx = this.ctx,
            radioGroup = {
                block : 'radio-group',
                mix : { block : 'tabs', elem : 'tabs-group' },
                mods : this.extend({ type : 'line' }, ctx.mods),
                name : ctx.name || 'tabs',
                options : []
            },
            hasSelected = false,
            boxContainer = [];

        ctx.tabs && ctx.tabs.forEach(function(tab, i) {
            var tabBox = {
                elem : 'box',
                elemMods : { selected : tab.checked },
                js : { id : i },
                content : tab.content,
                mix : tab.mix
            };

            radioGroup.options.push({
                val : i,
                text : tab.title,
                checked : tab.selected,
                mix : { block : 'tabs', elem : 'tab' }
            });

            if(!hasSelected && tab.checked === true) {
                radioGroup.val = i;
                hasSelected = true;
                tabBox.mods = { selected : true };
            }

            boxContainer.push(tabBox);
        });

        if(!hasSelected) {
            radioGroup.val = 0;
            boxContainer[0].mods = { selected : true };
        }

        return [radioGroup, { elem : 'container', content : boxContainer }];
    })
);
