angular.module('mutirao-natal')

.factory('DetalheCorridasService', function($resource) {

    //Todo servico criado com factory deve retornar um objeto
    return $resource('/api/pgs/:id');

});