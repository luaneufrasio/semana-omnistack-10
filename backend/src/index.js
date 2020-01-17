const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-jqn6d.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: get, post, put delete

// Tipos de Parâmetros: 

//Query params: req.query (filtros, ordenação, paginação,...)
//Route params: Request. params (identificar um recurso na alteração, remoção)
//Body: Request.body (dados para para criação ou alteração de um registro)

//mongoDB (não-relacional)



app.listen(3333);