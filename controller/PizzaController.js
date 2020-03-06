const pizzaModel = require("../model/Pizza");

const pizzaController = {
    index:(req, res) => {
        res.send(pizzaModel.logo() + `
        ---------------------------------------------------------- <br>
        ----------<strong> Bem Vindo a Pizzaria Node! </strong>---------- <br>
        ---------------------------------------------------------- <br><br>
        <strong>/listarPizzas</strong> <br>Para mostrar o nosso catálogo <br><br>
        <strong>/listarCategoria/:categoria</strong> <br>Para procurar pizzas pela categoria <br><br>
        `);
    },

    listar:(req, res) => {
        res.send(pizzaModel.logo() + pizzaModel.listarPizzas());
    },

    categorias: (req, res) =>{
        let categoria = req.params.categoria;
        res.send(pizzaModel.logo() + pizzaModel.listarCategoria(categoria));
    },

    pedidos: (req, res) =>{
        res.send("**Pedidos**");
    }
}

module.exports = pizzaController