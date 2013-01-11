Ext.define('weather.controller.Weather', {
    extend: 'Ext.app.Controller',
	config:{
		stores:['Conditions','Cities'],
		models:['Condition', 'City'],
        views: ['Main', 'Home', 'AddLocation'],
		control:{
			
		},
		refs:{
			
		},
	},
	
	init:function(){
			
	},
	
	launch:function(){
		var that = this;
		Ext.device.Geolocation.getCurrentPosition({
    		success: function(position) {
				var latitude = position.coords.latitude,
				 	longitude =  position.coords.longitude;
        		Ext.data.StoreManager.lookup("Conditions").load({
					url:'http://api.wunderground.com/api/4c9a49fbc5bc7ec9/conditions/q/'+latitude+','+longitude+'.json'
				});
    		},
    		failure: function() {
        		alert('Cannot determine location');
    		}
		});
	}
	
});
