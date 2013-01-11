Ext.define("weather.view.AddLocation", {
    extend: Ext.form.Panel,
    alias: "widget.AddLocation",

    config:{
        items: [
            {
                xtype: "fieldset",
                title: "Add location",
                items:[
                    {
                        xtype: 'searchfield',
                        name: 'city',
						id:'city-search-field',
                        label: 'City',
						listeners:{
							keyup:function(field, newVal){
								var store = Ext.data.StoreManager.lookup("Cities");
								if(field.getValue()!=""){
									
									store.getProxy().setExtraParams({
								    	query: field.getValue()
									});
									store.load();	
								}else{
									store.removeAll();
								}
								
							}
						}
                    }
                ]
            },
			{
						xtype:'list',
						id:'city-search-list',
						height:'500px',
						itemTpl:'{name}',
						store:'Cities',
						margin:'0 0 0 550',
						listeners:{
							'itemtap':function(list,index, target, record, e, eOpts){
								list.getStore().removeAll();
								Ext.ComponentQuery.query("#city-search-field")[0].setValue(record.get("name"));
							}
						}
					}
        ]
    }
});
