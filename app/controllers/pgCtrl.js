module.exports = (app) => {

    let controller = {};
    let PG = app.models.pg;

    //store
    controller.listaPGs = async (req, res) => {
        const pgs = await PG.find();
        console.log(`[${new Date().toLocaleString()}] Listagem de PGs: GET /api/pgs\n`);
        return res.json(pgs);
    }

    controller.obtemPG = async (req, res) => {
        const pg = await PG.findById(req.params.id);
        console.log(`[${new Date().toLocaleString()}] Detalhes do PG: GET /api/pgs/${req.params.id}\n`);
        return res.json(pg);
    }

    controller.removePG = async (req, res) => {
        await PG.findByIdAndRemove(req.params.id);
        console.log(`[${new Date().toLocaleString()}] Remoção de PG: DELETE /api/pgs/${req.params.id}\n`);
        return res.send("Entrada removida");
    }

    controller.editaPG = async (req, res) => {
        const pg = await PG.findByIdAndUpdate(req.params.id, req.body, {new:true});
        console.log(`[${new Date().toLocaleString()}] Atualização de PG: PUT /api/pgs/${req.params.id}\n`);
        return res.json(pg);
    }

    controller.criaPG = async (req, res) => {
        const pg = await PG.create(req.body);
        console.log(`[${new Date().toLocaleString()}] Adição de Produto: POST /api/pgs\n`);
        return res.json(pg);
    }

    controller.listaPGsPorCorrida = async (req, res) => {
        const pgs = await PG.find({ corrida: req.params.id });
        console.log(`[${new Date().toLocaleString()}] Listagem de PGs: GET /api/corridas/pgs/${req.params.id}\n`);
        return res.json(pgs);
    }

    return controller;
    
};