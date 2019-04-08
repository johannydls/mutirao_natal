angular.module('mutirao-natal')

.factory('PgService', function($resource) {

    //Todo servico criado com factory deve retornar um objeto
    return $resource('/api/pgs/');

});