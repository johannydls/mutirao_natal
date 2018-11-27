angular.module('mutirao-natal')

.controller('CorridasCtrl', function($scope, CorridasService) {
    
    $scope.corridas = [];

    let buscaCorridas = () => {
        CorridasService.query((corridas) => {
            $scope.corridas = corridas;
        },
        (erro) => {
            console.log("Não foi possível obter a lista de corridas");
            console.log(erro);
        });
    };

    buscaCorridas();
});