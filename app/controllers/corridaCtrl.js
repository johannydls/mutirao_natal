module.exports = (app) => {

    let controller = {};
    let Corrida = app.models.corrida;

    //store
    controller.listaCorridas = async (req, res) => {
        const corridas = await Corrida.find();
        console.log(`[${new Date().toLocaleString()}] Listagem de PGs: GET /api/pgs\n`);
        return res.json(corridas);
    }

    controller.obtemCorrida = async (req, res) => {
        const corrida = await Corrida.findById(req.params.id);
        console.log(`[${new Date().toLocaleString()}] Detalhes do PG: GET /api/pgs/${req.params.id}\n`);
        return res.json(corrida);
    }

    controller.removeCorrida = async (req, res) => {
        await Corrida.findByIdAndRemove(req.params.id);
        console.log(`[${new Date().toLocaleString()}] Remoção de PG: DELETE /api/pgs/${req.params.id}\n`);
        return res.send("Corrida removida");
    }

    controller.editaCorrida = async (req, res) => {
        const corrida = await Corrida.findByIdAndUpdate(req.params.id, req.body, {new:true});
        console.log(`[${new Date().toLocaleString()}] Atualização de PG: PUT /api/pgs/${req.params.id}\n`);
        return res.json(corrida);
    }

    controller.criaCorrida = async (req, res) => {
        const corrida = await Corrida.create(req.body);
        console.log(`[${new Date().toLocaleString()}] Adição de Produto: POST /api/products\n`);
        return res.json(corrida);
    }

    return controller;
    
};