angular.module('main', ['minhasDiretivas','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $routeProvider.when('/fotos.php',{
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });

     $routeProvider.when('/fotos/new.php',{
         templateUrl: 'partials/new.html',
         controller: 'FotoController'
     });

     $routeProvider.otherwise({redirectTo: '/fotos.php'});

});
