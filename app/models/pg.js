const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Corrida = require('../models/corrida.js');

module.exports = () => {

    let pgSchema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        lider: {
            type: String,
            required: true
        },
        alimento: {
            type: String,
            required: false
        },
        alvo: {
            type: Number,
            required: false
        },
        coletado: {
            type: Number,
            required: false
        },
        corrida: {
            type: Schema.Types.ObjectId,
            ref: 'Corrida'
        }
    }, {
        timestamps: true
    });

    return mongoose.model('PG', pgSchema);
}