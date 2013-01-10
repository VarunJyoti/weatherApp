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
		var geo = Ext.create('Ext.util.Geolocation', {
		    autoUpdate: false,
		    listeners: {
		        locationupdate: function(geo) {
		            alert('New latitude: ' + geo.getLatitude());
					alert('New longitude: ' + geo.getLongitude());
		        },
		        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
		            if(bTimeout){
		                alert('Timeout occurred.');
		            } else {
		                alert('Error occurred.');
		            }
		        }
		    }
		});
		geo.updateLocation();
		
	}
	
});