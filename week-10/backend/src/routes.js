const { Router } = require('express');
const DevController = require('./controllers/DevControlle');
const SearchController = require('./controllers/SearchController');

const routes = Router();


// Métodos HTTP: GET, POST, PUTE, DELETE

// Tipos de parâmetros:
/*
    Query Params: request.query (Filtros, ordenação, paginação, ...)
    Route Params: request.params (Identificar um recurso)
    Body: request.body (Dados para criação ou alteração de um registro)
*/

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;