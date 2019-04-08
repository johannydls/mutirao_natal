let mongoose = require('mongoose');

module.exports = (uri) => {

    mongoose.connect(uri,  { useNewUrlParser: true, poolSize: 15 });

    mongoose.connection.on('connected', () => {
        console.log(`[===MONGODB===] CONECTADO EM ${uri}`);
    });

    mongoose.connection.on('disconnected', () => {
        console.log(`[===MONGODB===] DESCONECTADO DE ${uri}`);
    });

    mongoose.connection.on('error', (erro) => {
        console.log(`[===MONGODB===] ERRO NA CONEXÃO:\n${erro}`);
    });

    mongoose.set('debug', true);

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('[===MONGODB===] DESCONECTADO PELO TÉRMINO DA APLICAÇÃO');
            process.exit(0);
        });
    });
}