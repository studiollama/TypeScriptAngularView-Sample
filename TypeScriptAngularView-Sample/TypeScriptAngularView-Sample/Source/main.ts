//Now you can import new .ts files like this
import Greeter = require("Source/Greeter/greeter");

//If you export like this, you have to say new main.Main unlike the greeter where we say new Greeter()
export class Main {
    main: ng.IModule;
    /**
    *   Start web app and initialize nave buttons.
    */
    constructor($window, $route: ng.route.IRouteService) {

        this.main = angular.module('main', ['ngRoute'],
            function ($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {
                $routeProvider.when('/', {
                    templateUrl: '/Source/Greeter/greeter.html',
                    controller: Greeter,
                    controllerAs: 'greeter'
                });
                
                $locationProvider.html5Mode(true);
            }); 
        angular.bootstrap(document, ['main'])    
    }
}
