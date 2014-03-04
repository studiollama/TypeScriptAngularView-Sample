//This Configuress RequireJS and allos you to add external modules like jQuery
require.config({
    baseUrl: '/',
    //You can add more external libraries here by putting a comma after each library but the last
    paths: {
        'jQuery': 'Scripts/jquery-2.1.0.min'
    },
    //This is where you tell it what the library is referenced as, such as $ for jQuery
    shim: {
        jQuery: {
            exports: '$'
        }
    }
});

//Add any new shim's to the right of jQuery, and also add their export to the right of $?
require(['Source/main', 'jQuery'],
    (main?, $?) => {
        var app = new main.Main();
    });
