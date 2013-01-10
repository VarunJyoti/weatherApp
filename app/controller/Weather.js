Ext.define('weather.controller.Weather', {
    extend: 'Ext.app.Controller',
	views: ['Main'],
	config:{
		control:{
			
		},
		refs:{
			
		},
	},
	
	init:function(){
			
	},
	
	launch:function(){
		
		Ext.device.Geolocation.getCurrentPosition({
    		success: function(position) {
        		console.log(position.coords);
    		},
    		failure: function() {
        		alert('something went wrong!');
    		}
		});
	}
	
});