const pizzaModel = require("../model/Pizza");

const pizzaController = {
    index:(req, res) => {
        res.send(pizzaModel.logo() + `
        ---------------------------------------------------------- <br>
        ----------<strong> Bem Vindo a Pizzaria Node! </strong>---------- <br>
        ---------------------------------------------------------- <br><br>
        <strong>/listarPizzas</strong> <br>Para mostrar o nosso catálogo <br><br>
        <strong>/listarCategoria/:categoria</strong> <br>Para procurar pizzas pela categoria <br><br>
        <strong>/listarPizzas/:nome</strong> <br>Para procurar uma pizza pelo nome <br><br>
        <strong>/addPizza/:nome/:categoria/:preco</strong> <br>Para adicionar uma nova pizza ao catalogo<br><br>
        <strong>/listarPedidos</strong> <br>Para mostrar todos os pedidos <br><br>
        `);
    },

    listar:(req, res) => {
        res.send(pizzaModel.logo() + pizzaModel.listarPizzas());
    },

    nome: (req,res) =>{
        let nome = req.params.nome;
        res.send(pizzaModel.logo() + pizzaModel.buscarPizza(nome));
    },

    categorias: (req, res) =>{
        let categoria = req.params.categoria;
        res.send(pizzaModel.logo() + pizzaModel.listarCategoria(categoria));
    },

    addPizza: (req,res) =>{
        let nome = req.params.nome;
        let categoria = req.params.categoria; 
        let preco = req.params.preco;
        res.send(pizzaModel.logo() + pizzaModel.addPizza(nome, categoria, preco));
    },

    listarPedidos: (req, res) =>{
        res.send(pizzaModel.logo() + pizzaModel.listarPedidos());
    },

    addPedidos: (req, res) =>{
        let cliente = req.params.nome;
        let pizzas = req.params.pizzas;
        res.send(pizzaModel.logo() + pizzaModel.addPedido(cliente,...pizzas));
    }
}

module.exports = pizzaController