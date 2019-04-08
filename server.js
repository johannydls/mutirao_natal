let http = require('http');
let app = require('./express')();

require('./config/database.js')('mongodb://localhost:27017/corrida_mutirao_db');

http.createServer(app).listen(app.get('port'), () => {
    console.log(`[===SERVIDOR===] RODANDO: http://localhost:${app.get('port')}`);
});