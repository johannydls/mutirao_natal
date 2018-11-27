let app = angular.module('mutirao-natal', [
    'ngMaterial',
    'ngMessages',
    'ngSanitize',
    'ngRoute',
    'routeStyles'
]);

app.config(($routeProvider) => {

    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home/home.html',
            controller: 'HomeCtrl',
            css: 'partials/home/home.css'
        })
        .when('/nova', {
            templateUrl: 'partials/nova_corrida/nova_corrida.html',
            controller: 'HomeCtrl',
            css: 'partials/nova_corrida/nova_corrida.css'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

