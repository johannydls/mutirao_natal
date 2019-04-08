module.exports = (app) => {

    let ctrl = app.controllers.pgCtrl;

    app.route('/api/pgs')
        .get(ctrl.listaPGs)
        .post(ctrl.criaPG);

    app.route('/api/pgs/:id')
        .get(ctrl.obtemPG)
        .delete(ctrl.removePG)
        .put(ctrl.editaPG);

    app.route('/api/corridas/pgs/:id')
        .get(ctrl.listaPGsPorCorrida)
}