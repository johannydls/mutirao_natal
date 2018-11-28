angular.module('mutirao-natal')

.controller('NovaCorridaCtrl', function($scope, CorridasService) {
    
    $scope.corrida = new CorridasService();

    $scope.novaCorrida = () => {

        $scope.corrida.$save()
        .then(() => {
            $scope.mensagem = { texto: 'Salvo com sucesso!'}
            console.log("Salvo com sucesso!");
            $scope.corrida = new CorridasService();
        })
        .catch((erro) => {
            $scope.mensagem = { texto: 'Erro ao salvar!'}
            console.log("Erro ao salvar: ", erro);
        });
    };

});