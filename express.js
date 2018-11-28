let express        = require('express');
let load           = require('express-load');
let bodyParser     = require('body-parser');
let methodOverride = require('method-override');

module.exports = () => {
    const app = express();

    app.set('port', process.env.PORT || 8008);

    app.use(express.static(__dirname + '/public'));
    console.log(__dirname);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}