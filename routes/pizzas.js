const express = require('express');
const Router = express.Router();
const pizzaController = require("../controller/PizzaController");

Router.get('/', pizzaController.index);
Router.get('/listarPizzas', pizzaController.listar);
Router.get('/listarPizzas/:nome', pizzaController.nome);
Router.get('/listarCategoria/:categoria', pizzaController.categorias)
Router.get('/addPizza/:nome/:categoria/:preco', pizzaController.addPizza);
Router.get('/listarPedidos', pizzaController.listarPedidos);
// Router.get('/addPedido/:nome/:pizzas', pizzaController.addPedidos);

module.exports = Router;