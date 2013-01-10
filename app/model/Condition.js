Ext.define('weather.model.Condition', {
	
		extend: 'Ext.data.Model',
		config:{
		fields: [
			{name:'full_loc',mapping:'display_location.full'},
			{name: 'city', mapping:'display_location.city'}
		]	
	}
      
});