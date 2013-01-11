Ext.define('weather.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
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
                title: 'Settings',
                iconCls: 'settings',
                xtype: "ManageLocations"
            }
        ]
    }
});
