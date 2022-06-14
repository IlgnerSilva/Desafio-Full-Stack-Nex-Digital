require('dotenv').config();
const app = require('./src/index');
const PORT = process.env.PORT || 4000;
require('./redis/blacklist')

app.listen(PORT, ()=>{
    console.log("Servidor Rodando!")
})