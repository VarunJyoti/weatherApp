Ext.define('weather.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                layout: "fit",
                xtype: "Home",
                iconCls: 'home',
                title: 'Home'
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                html: [
                    "Another place holder view for the time being"
                ].join("")
            }
        ]
    }
});
