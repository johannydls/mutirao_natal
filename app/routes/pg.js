module.exports = (app) => {

    let ctrl = app.controllers.pgCtrl;

    app.route('/api/pgs')
        .get(ctrl.listaPGs)
        .post(ctrl.salvaPG);

    app.route('/api/pgs/:id')
        .get(ctrl.obtemPG)
        .delete(ctrl.removePG);
}