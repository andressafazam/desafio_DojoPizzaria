const express = require('express');
const Router = express.Router();
const pizzaController = require("../controller/PizzaController");

Router.get('/', pizzaController.index);
Router.get('/listarPizzas', pizzaController.listar);
Router.get('/listarCategoria/:categoria', pizzaController.categorias);
Router.get('/listarPizzas/:nome', pizzaController.nome);
Router.get('/addPizza/:nome/:categoria/:preco', pizzaController.addPizza);
Router.get('/addPedido/', pizzaController.pedidos);

module.exports = Router;