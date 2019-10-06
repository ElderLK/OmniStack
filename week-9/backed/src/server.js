const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config/config'); 

const app = express();

mongoose.connect(`mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).catch(err => console.log(err));

// HTTP Methods GET POST PUT HEAD DELETE PATCH OPTIONS

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness');
});

app.use(routes);

app.listen(3333);
