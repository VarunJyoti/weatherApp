Ext.define('weather.store.Cities', {
	
		extend: 'Ext.data.Store',
		config:{
	    model: 'weather.model.City',
		proxy: {
	        type: 'jsonp',
	        url: 'http://autocomplete.wunderground.com/aq?states=0&countries=0',
			callbackKey:'cb',
	        reader: {
	            type: 'json',
	            rootProperty: 'RESULTS'
	        },
			 extraParams: {
            	query: ''
          	}
	    }
	}
});

