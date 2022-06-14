const express =require('express');
const app = express();
const { authenticationStrategy } = require('./api/middlewares');

app.use(
    express.json(),
    express.urlencoded({
        extended: true
    })
    );
require('./api/routes/index')(app)

app.get('/', (req, res)=> res.send('Rota raiz!'))

module.exports = app;