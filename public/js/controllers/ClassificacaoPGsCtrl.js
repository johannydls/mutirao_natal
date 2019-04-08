angular.module('mutirao-natal')

.controller('ClassificacaoPGsCtrl', function($scope, $rootScope, $localStorage, CorridasPgService) {
    
    $scope.pgsCorrida = []
    $scope.corridaSelecionada = $localStorage.corridaSelecionada;
    $scope.coletaGeral = 0;
    
    let buscaPgsCorrida = () => {
        CorridasPgService.query({id:$localStorage.corridaSelecionada._id},(pgs) => {
            $scope.pgsCorrida = pgs;
            console.log("PGs carregados");
        },
        (erro) => {
            console.log("Não foi possível obter a lista de pgs para a corrida");
            console.log(erro);
        });
    };

    buscaPgsCorrida();

    $scope.selecionaCorrida = (corrida) => {
        $localStorage.corridaSelecionada = corrida;
        $rootScope.corridaSelecionada = corrida;
    }

    $scope.loadingCurrent1 = {
        backgroundColor: "#008080"
    }

});