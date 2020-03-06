const express = require('express');
const Router = express.Router();
const pizzaController = require("../controller/PizzaController");

Router.get('/', pizzaController.index);
Router.get('/listarPizzas', pizzaController.listar);
Router.get('/listarCategoria/:categoria', pizzaController.categorias);

module.exports = Router;