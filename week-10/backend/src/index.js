require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).catch(err => console.log(err));

app.use(express.json());
app.use(routes);

app.listen(3333);
