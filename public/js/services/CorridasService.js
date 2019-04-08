angular.module('mutirao-natal')

.factory('CorridasService', function($resource) {

    //Todo servico criado com factory deve retornar um objeto
    return $resource('/api/corridas/');

});