Ext.define("weather.view.ManageLocations", {
    extend: Ext.dataview.List,
    alias: "widget.ManageLocations",
    id: "wv-managelocations",

    config:{
        itemTpl: '{name}',
        store: "Locations"
    }
});
