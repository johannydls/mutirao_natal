const mongoose = require('mongoose');

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
            required: false,
            default: 0
        }
    }, {
        timestamps: true
    });

    return mongoose.model('Corrida', corridaSchema);
}