angular.module('mutirao-natal')

.controller('CorridaPGsCtrl', function($scope, $rootScope, $route, CorridasPgService, 
                            $localStorage, $mdDialog, PgService, CrudPgService,
                            CrudCorridasService) {
    
    $scope.pgsCorrida = [];
    $scope.pgSelecionado = null;
    $scope.coletaGeral = 0;

    $scope.coresUsadas = [];
    $scope.cores = ["#C62828","#1565C0","#388E3C","#558B2F","#FFFF00","#FF4081","#7B1FA2","#7C4DFF","#795548","#EF6C00"];
    $scope.coresDisponiveis = [];

    $scope.pg = new PgService();
    $scope.pg.corrida = $localStorage.corridaSelecionada._id;
    $scope.corridaSelecionada = $localStorage.corridaSelecionada;

    let buscaPgsCorrida = () => {
        CorridasPgService.query({id:$localStorage.corridaSelecionada._id},(pgs) => {
            $scope.pgsCorrida = pgs;
            console.log("PGs carregados");
            $scope.coresUsadas = $scope.pgsCorrida.map(a => a.cor);
            $scope.coresDisponiveis = $scope.cores.filter(cor => $scope.coresUsadas.indexOf(cor) == -1);

            let corrida = CrudCorridasService.get({id:$localStorage.corridaSelecionada._id}, () => {
                
                corrida.coletado = $scope.pgsCorrida.reduce((sum, pg) => {
                    return sum + pg.coletado;
                }, 0);

                corrida.$update(() => {
                    console.log("Coleta atualizada")
                })
            });
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
            
        buscaPgsCorrida();
            $scope.mensagem = { texto: 'Salvo com sucesso!'}
            $mdDialog.cancel();  
            console.log("Salvo com sucesso!");
        })
        .catch((erro) => {
            $scope.mensagem = { texto: 'Erro ao salvar!'}
            console.log("Erro ao salvar: ", erro);
        });

        $route.reload();
    }

    $scope.removePG = (id) => {
        CrudPgService.delete({ id: id }, () => {
            buscaPgsCorrida();
            $mdDialog.cancel();
        },
            (erro) => {
                console.log("Não foi possível remover o PG");
                console.log(erro);
            }
        );
    }

    $scope.selecionaPG = (pg) => {
        $scope.pgSelecionado = pg;
    }

    $rootScope.atualiza = () => {
        buscaPgsCorrida();
    }

    $scope.showDialogAddPG = (ev) => {
        $mdDialog.show({
            controller: 'CorridaPGsCtrl',
            templateUrl: '/partials/pgs/novo_pg.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        });
    }

    $scope.hide = function() {
        $mdDialog.hide();
    };
  
    $scope.cancel = function() {
        $mdDialog.cancel();   
    };

    $scope.query = {
        order: 'nome',
        limit: 5,
        page: 1
    };

    $scope.showConfirmRemove = function(ev, pg) {
        $scope.pgSelecionado = pg;

        var confirm = $mdDialog.confirm()
              .title('Você deseja remover o PG')
              .htmlContent(`
              <br><h3>${$scope.pgSelecionado.nome}</h3><br>
              <p><strong>Líder: </strong>${$scope.pgSelecionado.lider}</p>
              `)
              .ariaLabel('Remover pequeno grupo')
              .targetEvent(ev)
              .ok('Sim, desejo remover')
              .cancel('Cancelar');
    
        $mdDialog.show(confirm).then(function() {
          $scope.removePG($scope.pgSelecionado._id);
        }, function() {
          $scope.status = 'You decided to keep your debt.';
        });
      };
    
    

    
});