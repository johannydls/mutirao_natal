angular.module('mutirao-natal')

.controller('CorridaPGsCtrl', function($scope, CorridasPgService, $localStorage, $mdDialog, PgService) {
    
    $scope.pgsCorrida = [];

    $scope.pg = new PgService();
    $scope.pg.corrida = $localStorage.corridaSelecionada._id;
    $scope.corridaSelecionada = $localStorage.corridaSelecionada;

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

    $scope.adicionaPG = () => {
        $scope.pg.$save()
        .then(() => {
            $scope.mensagem = { texto: 'Salvo com sucesso!'}
            console.log("Salvo com sucesso!");
            buscaPgsCorrida();
            $scope.pg = new PgService();
            $mdDialog.hide();
        })
        .catch((erro) => {
            $scope.mensagem = { texto: 'Erro ao salvar!'}
            console.log("Erro ao salvar: ", erro);
        });
    }

    $scope.showDialogAddPG = (ev) => {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: '/partials/pgs/novo_pg.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
          })
              .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
              }, function() {
                $scope.status = 'You cancelled the dialog.';
              });
    }

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };
    
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
    
        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
      }

      $scope.query = {
        order: 'nome',
        limit: 5,
        page: 1
      };
});