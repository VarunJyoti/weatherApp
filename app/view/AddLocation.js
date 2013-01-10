Ext.define("weather.view.AddLocation", {
    extend: Ext.form.Panel,
    alias: "widget.AddLocation",

    config:{
        items: [
            {
                xtype: 'textfield',
                name: 'city',
                label: 'City'
            }
        ]
    }
});
