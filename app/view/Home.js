Ext.define('weather.view.Home', {
    extend: "Ext.carousel.Carousel", 
    alias: "widget.Home",

    defaults: {
        styleHtmlContent: true
    },

    config:{
        items:[
            {
                html: "hello item 1",
                style: 'background-color: #5E99CC'
            },
            {
                html: "hello item 2",
                style: 'background-color: #759E60'
            }
        ]
    }
});

