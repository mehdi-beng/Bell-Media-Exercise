var app = angular
    .module('WinnipegAlignement', ['ngRoute'])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'app/views/home.view.html'
        })

        .when('/joueur', {
            controller: 'JoueurController',
            templateUrl: 'app/views/joueur.view.html'

        })

        .otherwise({
            redirectTo: '/'
        });

}