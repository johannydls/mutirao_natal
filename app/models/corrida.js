const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = () => {

    let corridaSchema = mongoose.Schema({
        ano: {
            type: Number,
            required: true
        },
        alvo_geral: {
            type: Number,
            required: false
        },
        coletado: {
            type: Number,
            required: false
        }
    });

    return mongoose.model('Corrida', corridaSchema);
}