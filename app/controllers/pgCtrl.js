module.exports = (app) => {

    let controller = {};
    let PG = app.models.pg;

    controller.listaPGs = (req, res) => {
        let promise = PG.find().exec()

            .then((PGs) => {
                console.log('[===SERVIDOR===] GET /api/pgs');
                res.json(PGs);
            },
        
            (erro) => {
                console.log(`[===SERVIDOR===] ERROR: GET /api/pgs \n${erro}`);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemPG = (req, res) => {
        let _id = req.params.id;

        PG.findById(_id).exec()

            .then((PG) => {
                if (!PG) throw new Error("PG não encontrada");
                res.json(PG);
            },
            
            (erro) => {
                console.log(`[===SERVIDOR===] ERROR: GET /api/pgs/${_id}\n${erro}`);
                res.status(404).json(erro);
            }
        );
    };

    controller.removePG = (req, res) => {
        let _id = req.params.id;

        PG.remove({"_id": _id}).exec()

            .then(()=> {
                console.log(`[===SERVIDOR===] DELETE /api/pgs/${_id}`);
                res.end();
            },
            
            (erro) => {
                console.log(`[===SERVIDOR===] ERROR: DELETE /api/pgs/${_id}`);
                return console.error(erro);
            }
        );
    };

    controller.salvaPG = (req, res) => {
        let _id = req.body._id;

        if (_id) {
            PG.findByIdAndUpdate(_id, req.body).exec()

                .then((PG) => {
                    console.log(`[===SERVIDOR===] PUT /api/pgs/${_id}`);
                    res.json(PG);
                },
                (erro) => {
                    console.log(`[===SERVIDOR===] ERROR: PUT /api/pgs/${_id}\n${erro}`);
                }
            );
        } else {
            PG.create(req.body)

                .then((PG) => {
                    console.log(`[===SERVIDOR===] POST /api/pgs 201 OK`);
                    res.status(201).json(PG);
                },
                (erro) => {
                    console.log(`[===SERVIDOR===] ERROR: POST /api/pgs 500\n${erro}`);
                    res.status(500).json(erro);
                }
            );
        }
    }

    return controller;
};