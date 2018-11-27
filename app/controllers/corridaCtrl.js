module.exports = (app) => {

    let controller = {};
    let Corrida = app.models.corrida;

    controller.listaCorridas = (req, res) => {
        let promise = Corrida.find().exec()

            .then((corridas) => {
                console.log('[===SERVIDOR===] GET /api/corridas');
                res.json(corridas);
            },
        
            (erro) => {
                console.log(`[===SERVIDOR===] ERROR: GET /api/corridas \n${erro}`);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemCorrida = (req, res) => {
        let _id = req.params.id;

        Corrida.findById(_id).exec()

            .then((corrida) => {
                if (!corrida) throw new Error("Corrida não encontrada");
                res.json(corrida);
            },
            
            (erro) => {
                console.log(`[===SERVIDOR===] ERROR: GET /api/corridas/${_id}\n${erro}`);
                res.status(404).json(erro);
            }
        );
    };

    controller.removeCorrida = (req, res) => {
        let _id = req.params.id;

        Corrida.remove({"_id": _id}).exec()

            .then(()=> {
                console.log(`[===SERVIDOR===] DELETE /api/corridas/${_id}`);
                res.end();
            },
            
            (erro) => {
                console.log(`[===SERVIDOR===] ERROR: DELETE /api/corridas/${_id}`);
                return console.error(erro);
            }
        );
    };

    controller.salvaCorrida = (req, res) => {
        let _id = req.body._id;

        if (_id) {
            Corrida.findByIdAndUpdate(_id, req.body).exec()

                .then((corrida) => {
                    console.log(`[===SERVIDOR===] PUT /api/corridas/${_id}`);
                    res.json(corrida);
                },
                (erro) => {
                    console.log(`[===SERVIDOR===] ERROR: PUT /api/corridas/${_id}\n${erro}`);
                }
            );
        } else {
            Corrida.create(req.body)

                .then((corrida) => {
                    console.log(`[===SERVIDOR===] POST /api/corridas 201 OK`);
                    res.status(201).json(corrida);
                },
                (erro) => {
                    console.log(`[===SERVIDOR===] ERROR: POST /api/corridas 500\n${erro}`);
                    res.status(500).json(erro);
                }
            );
        }
    }

    return controller;
};