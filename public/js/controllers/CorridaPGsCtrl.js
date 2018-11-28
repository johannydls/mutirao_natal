angular.module('mutirao-natal')

.controller('CorridaPGsCtrl', function($scope, CorridasService, CorridasPgService, $localStorage) {
    
    $scope.pgsCorrida = [];

    let buscaPgsCorrida = () => {
        CorridasPgService.query({id:$localStorage.corridaSelecionada._id},(pgs) => {
            $scope.pgsCorrida = pgs;
        },
        (erro) => {
            console.log("Não foi possível obter a lista de pgs para a corrida");
            console.log(erro);
        });
    };

    buscaPgsCorrida();
});