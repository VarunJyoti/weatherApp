Ext.define('weather.store.Conditions', {
	
		extend: 'Ext.data.Store',
		config:{
	    model: 'weather.model.Condition',
		proxy: {
	        type: 'jsonp',
	        url: 'http://api.wunderground.com/api/4c9a49fbc5bc7ec9/conditions/q',
	        reader: {
	            type: 'json',
	            rootProperty: 'current_observation'
	        }
	    }
	}
});

