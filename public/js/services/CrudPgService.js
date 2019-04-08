angular.module('mutirao-natal')

.factory('CrudPgService', function($resource) {

    //Todo servico criado com factory deve retornar um objeto
    return $resource('/api/pgs/:id', {id:'@_id'}, {
        update: { method: 'PUT' }
    });

});