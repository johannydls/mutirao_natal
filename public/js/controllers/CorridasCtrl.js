angular.module('mutirao-natal')

.controller('CorridasCtrl', function($scope, $rootScope, CorridasService, $localStorage, $mdDialog, CrudCorridasService) {
    
    $scope.corridas = [];
    $scope.coletaGeral = 0;
    $scope.anoAtual = new Date().getFullYear();

    let buscaCorridas = () => {
        CorridasService.query((corridas) => {
            $scope.corridas = corridas;
        },
        (erro) => {
            console.log("Não foi possível obter a lista de corridas");
            console.log(erro);
        });
    };

    $scope.selecionaCorrida = (corrida) => {
        $localStorage.corridaSelecionada = corrida;
        $rootScope.corridaSelecionada = corrida;
    }

    buscaCorridas();

    $scope.query = {
        order: '-ano',
        limit: 5,
        page: 1
    };

    $scope.removeCorrida = (id) => {
        CrudCorridasService.delete({ id: id }, () => {
            buscaCorridas();
            $mdDialog.cancel();
        },
            (erro) => {
                console.log("Não foi possível a corrida");
                console.log(erro);
            }
        );
    }

    $scope.showConfirmRemove = function(ev, corrida) {
        $scope.corridaSelecionada = corrida;

        var confirm = $mdDialog.prompt()
              .title('Você deseja remover o Mutirão de Natal de ' + $scope.corridaSelecionada.ano + '?')
              .htmlContent(`
              <br><p><strong>Alvo geral: </strong>${$scope.corridaSelecionada.alvo_geral} kgs</p>
              <p><strong>Coletado: </strong>${$scope.corridaSelecionada.coletado} kgs</p>
              `)
              .placeholder('Digite "sim" para confirmar a exclusão')
              .ariaLabel('Remover corrida')
              .targetEvent(ev)
              .ok('Sim, desejo remover')
              .cancel('Cancelar');
    
        $mdDialog.show(confirm).then(function(result) {
          if(result.toLowerCase() === 'sim') {
              $scope.removeCorrida($scope.corridaSelecionada._id);
            }
        }, function() {
          
        });
      };
});