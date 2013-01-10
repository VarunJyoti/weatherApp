Ext.define('weather.store.Locations', {
    extend: 'Ext.data.Store',
    config:{
        model: 'weather.model.Location',
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id: 'user-added-locations'
        },

        listeners:{
            load: function(){
                console.log(arguments);
            }
        }
	}
});
