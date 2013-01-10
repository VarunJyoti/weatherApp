Ext.define("weather.view.AddLocation", {
    extend: Ext.form.Panel,
    alias: "widget.AddLocation",

    config:{
        items: [
            {
                xtype: "fieldset",
                title: "Add location",
                items:[
                    {
                        xtype: 'searchfield',
                        name: 'city',
                        label: 'City'
                    }
                ]
            }
        ]
    }
});
