const express = require('express');
const app = express();
const cors = require('cors');
const { authenticationStrategy } = require('./api/middlewares');

app.use(
    express.json(),
    express.urlencoded({
        extended: true
    })
);

app.use((req, res, next) =>{
    console.log('acessou o middleware')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors());
    next();
})

require('./api/routes/index')(app)

app.get('/', (req, res) => res.send('Rota raiz!'))

module.exports = app;