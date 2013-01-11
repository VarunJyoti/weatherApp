Ext.define('weather.model.Location', {
    extend: 'Ext.data.Model',
    config:{
        identifier: 'uuid',
        fields: [
            {
                name:'name', mapping:'name'
            },
            {
                name:'latitude', mapping:'latitude'
            },
            {
                name:'longitude', mapping:'longitude'
            }
        ],

        validations: [
            { type: "presence", field: "name" },
            { type: "presence", field: "latitude" },
            { type: "presence", field: "longitude" }
        ]
	}
});
