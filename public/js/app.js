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
    'ngSanitize',
    'xeditable'
]);

app.constant('env', {
    BASE_API_LOCAL: 'http://localhost:8008'
    //BASE_API_REMOTE: 'https://projetop1.herokuapp.com'
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
        .when('/editar/pg/:id', {
            templateUrl: 'partials/pgs/editar_pg.html',
            controller: 'EditaPGsCtrl',
            css: 'partials/pgs/pgs.css'
        })
        .when('/doacoes', {
            templateUrl: 'partials/pgs/doacoes.html',
            controller: '',
            css: 'partials/pgs/pgs.css'
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

 app.run(['editableOptions', function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  }]);