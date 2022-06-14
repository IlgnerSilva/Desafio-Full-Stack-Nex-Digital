const express =require('express');
const app = express();

app.use(express.json());
require('./api/routes/index')(app)

app.get('/', (req, res)=> res.send('Rota raiz!'))

module.exports = app;