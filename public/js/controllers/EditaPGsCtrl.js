angular.module('mutirao-natal')

.controller('EditaPGsCtrl', function($scope, $location, $localStorage, $routeParams, CrudPgService) {

    if($routeParams.id) {
        CrudPgService.get({ id: $routeParams.id }, (pg) => {
            $scope.pgSelecionado = pg;
        }, 
        (erro) => {
            console.log("Erro ao obter PG:", erro);
        });
    }

    $scope.editar = () => {

        let pg = CrudPgService.get({ id: $scope.pgSelecionado._id}, () => {
            pg.lider = $scope.pgSelecionado.lider;
            pg.alimento = $scope.pgSelecionado.alimento;
            pg.coletado = $scope.pgSelecionado.coletado;
            pg.alvo = $scope.pgSelecionado.alvo;

            pg.$update(() => {
                console.log("PG Atualizado!");
                $location.path(`/corridas/${$localStorage.corridaSelecionada._id}`);
                alert("PG Atualizado")
            }, (erro) => {
                console.log(erro);
            })
        })

    }

    $scope.back = () => {
        console.log()
        $location.path(`/corridas/${$localStorage.corridaSelecionada._id}`);
    }
});