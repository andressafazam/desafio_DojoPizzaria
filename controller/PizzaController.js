const pizzaModel = require("../model/Pizza");

const pizzaController = {
    index:(req, res) => {
        res.send(pizzaModel.logo() + `
        ---------------------------------------------------------- <br>
        ----------<strong> Bem Vindo a Pizzaria Node! </strong>---------- <br>
        ---------------------------------------------------------- <br><br>
        <strong>/listarPizzas</strong> <br>Para mostrar o nosso catálogo <br><br>
        <strong>/listarCategoria/:categoria</strong> <br>Para procurar pizzas pela categoria <br><br>
        <strong>/listarPizzas/nome/:nome</strong> <br>Para procurar uma pizza pelo nome <br><br>
        <strong>/addpizza/:nome/:categoria/:preco</strong> <br>Para adicionar uma nova pizza ao catalogo<br><br>
        `);
    },

    listar:(req, res) => {
        res.send(pizzaModel.logo() + pizzaModel.listarPizzas());
    },

    categorias: (req, res) =>{
        let categoria = req.params.categoria;
        res.send(pizzaModel.logo() + pizzaModel.listarCategoria(categoria));
    },

    nome: (req,res) =>{
        let nome = req.params.nome;
        res.send(pizzaModel.logo() + pizzaModel.buscarPizza(nome));
    },

    addPizza: (req,res) =>{
        let nome = req.params.nome;
        let categoria = req.params.categoria; 
        let preco = req.params.preco;
        res.send(pizzaModel.logo() + pizzaModel.addPizza(nome, categoria, preco));
    },

    pedidos: (req, res) =>{
        res.send("**Pedidos**");
    }
}

module.exports = pizzaController