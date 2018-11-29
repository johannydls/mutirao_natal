let app = angular.module('mutirao-natal', [
    'ngMaterial',
    'ngMessages',
    'ngSanitize',
    'ngRoute',
    'routeStyles',
    'ngResource',
    'ngStorage',
    'md.data.table',
    'isteven-omni-bar',
    'ngSanitize'
]);

app.constant('env', {
    BASE_API_LOCAL: 'http://localhost:8008'
    //BASE_API_REMOTE: 'https://projetop1.herokuapp.com'
    //BASE_API_REMOTE: 'http://localhost:3000'
});

app.config(($routeProvider) => {

    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home/home.html',
            controller: 'HomeCtrl',
            css: 'partials/home/home.css'
        })
        .when('/nova', {
            templateUrl: 'partials/nova_corrida/nova_corrida.html',
            controller: 'NovaCorridaCtrl',
            css: 'partials/nova_corrida/nova_corrida.css'
        })
        .when('/corridas', {
            templateUrl: 'partials/corridas/corridas.html',
            controller: 'CorridasCtrl',
            css: 'partials/corridas/corridas.css'
        })
        .when('/corridas/:id', {
            templateUrl: 'partials/corridas/detalhe_corridas.html',
            controller: 'CorridaPGsCtrl',
            css: 'partials/corridas/corridas.css'
        })
        .when('/classificacao/:id', {
            templateUrl: 'partials/corridas/classificacao.html',
            controller: 'ClassificacaoPGsCtrl',
            css: 'partials/corridas/corridas.css'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('blue');
});

app.config(function($mdAriaProvider) {
    // Globally disables all ARIA warnings.
    $mdAriaProvider.disableWarnings();
 });
