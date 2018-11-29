angular.module('mutirao-natal')

.factory('CrudCorridasService', function($resource) {

    //Todo servico criado com factory deve retornar um objeto
    return $resource('/api/corridas/:id', {id:'@_id'}, {
        update: { method: 'PUT' }
    });

});