Ext.define('weather.controller.Weather', {
    extend: 'Ext.app.Controller',
	config:{
        views: ['Main', 'Home'],
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
        		console.log(position);
    		},
    		failure: function() {
        		alert('Cannot determine location');
    		}
		});
	}
	
});
