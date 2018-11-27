module.exports = (app) => {

    let ctrl = app.controllers.corridaCtrl;

    app.route('/api/corridas')
        .get(ctrl.listaCorridas)
        .post(ctrl.salvaCorrida);

    app.route('/api/corridas/:id')
        .get(ctrl.obtemCorrida)
        .delete(ctrl.removeCorrida);
}