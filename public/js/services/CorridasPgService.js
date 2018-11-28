angular.module('mutirao-natal')

.factory('CorridasPgService', function($resource) {

    //Todo servico criado com factory deve retornar um objeto
    return $resource('/api/corridas/pgs/:id');

});