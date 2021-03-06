//This Configuress RequireJS and allos you to add external modules like jQuery
require.config({
    baseUrl: '/',
    //You can add more external libraries here by putting a comma after each library but the last
    paths: {
        'jQuery': 'Scripts/jquery-2.1.0.min',
        'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min',
        'angularRoute': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-route.min'
    },
    //This is where you tell it what the library is referenced as, such as $ for jQuery
    shim: {
        jQuery: {
            exports: '$'
        },
        angular: {
            exports: 'angular'
        },
        angularRoute: {
            deps: ['angular']
        }
    }
});

//Add any new shim's to the right of jQuery, and also add their export to the right of $?
require(['Source/main', 'jQuery', 'angularRoute'],
    (main?, $?) => {
        var app = new main.Main();
    });
