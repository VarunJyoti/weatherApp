Ext.define('weather.controller.Weather', {
    extend: 'Ext.app.Controller',
	config:{
		stores:['Conditions','Cities', 'Locations'],
		models:['Condition', 'City', 'Location'],
        views: ['Main', 'Home', 'AddLocation', 'ManageLocations'],
		control:{
			
		},
		refs:{
				manageLocView: "#wv-managelocations"
			}
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

		this.getManageLocView().on("painted", function(list, op){
			console.log("list painted");
			console.log(arguments);
		})

		this.getManageLocView().on("updatedata", function(list, op){
			console.log("list data updated");
			console.log(arguments);
		})
	}
	
});
