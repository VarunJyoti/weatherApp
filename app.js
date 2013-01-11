//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'weather': 'app'
});
//</debug>

Ext.application({
    name: 'weather',

    requires: [
        'Ext.MessageBox',
		'Ext.device.Geolocation',
		'Ext.carousel.Carousel',
		'Ext.form.Panel',
        'Ext.dataview.List',
		'Ext.data.proxy.JsonP',
		'Ext.form.FieldSet',
		'Ext.field.Search',
    ],
	
	controllers:['Weather'],
    

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        V2.util._init();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('weather.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

Ext.namespace("V2.util");
V2.util = (function(){
    var storeMgr, locationStore;

    var getUserAddedLocations = function(){
        locationStore.load();
    }

    var addUserLocation = function(locObj){
        var locationObj = {};

        if(locObj.$className && locObj.$className === "weather.model.Location"){
            locationObj = locObj
        } else {
            var locationObj = Ext.create("weather.model.Location", locObj);
        }

        if(locationObj.isValid()){
            locationStore.add(locationObj);
        }else{
            console.log("Invalid locations object");
        }
    }

    var init = function(){
        storeMgr = Ext.data.StoreManager;
        locationStore = storeMgr.lookup("Locations");
    }

    return {
        "getUserAddedLocations": getUserAddedLocations,
        "addUserLocation": addUserLocation,
        "_init": init
    }
})();
