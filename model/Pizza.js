let pedidos = [
    { cliente:'Pedro', pizza:['Calabresa'], total: 0 },
    { cliente:'Marta', pizza:['Portuguesa', 'Brigadeiro'], total: 0 }
];

let pizzas = [
    { nome: "Calabresa", categoria: "Salgada", preco: 15 },
    { nome: "Mussarela", categoria: "Salgada", preco: 15 },
    { nome: "Peperoni", categoria: "Salgada", preco: 20 },
    { nome: "Portuguesa", categoria: "Salgada", preco: 20 },
    { nome: "Quatro queijos", categoria: "Salgada", preco: 25 },
    { nome: "Milho e Bacon", categoria: "Salgada", preco: 25 },
    { nome: "Beijinho", categoria: "Doce", preco: 20 },
    { nome: "Brigadeiro", categoria: "Doce", preco: 20 },
    { nome: "Sensação", categoria: "Doce", preco: 25 },
    { nome: "Romeu e Julieta", categoria: "Doce", preco: 25 },
    { nome: "Milho", categoria: "Vegetariana", preco: 15 },
    { nome: "Palmito", categoria: "Vegetariana", preco: 20 },
    { nome: "Brócolis", categoria: "Vegetariana", preco: 25 },
    { nome: "Abobrinha", categoria: "Vegetariana", preco: 25 },
];

categorias = ["Salgada", "Doce", "Vegetariana"];

const logo = () =>{ 
    return `**************************************<br>
    ************<strong> Pizzaria Node </strong>*************
    <br>**************************************<br><br>`;
} 

const listarPizzas = () =>{
    let conteudo = `
    ----------------
    <strong> Catálogo de Pizzas</strong> 
    ----------------<br>`
    for(let categ of categorias){
        conteudo+= listarCategoria(categ);
    }
    return conteudo;
}

const listarCategoria = categoria =>{
    let conteudo = `---------------------------------------------------------- <br>
    <strong> Pizzas ${categoria}s: </strong> <br> <br>`;
    for(let pizza of pizzas){
        let espaco = ".....";
        while ((pizza.nome+espaco).length < 32){
            espaco+=".";
        }
        if(pizza.categoria == categoria){
            conteudo+=`&nbsp; &nbsp; &nbsp; &nbsp; - ${pizza.nome} ${espaco} R$ ${pizza.preco} <br>`;
        }
    }
    conteudo+=`---------------------------------------------------------- <br>`;
    return conteudo;
}

const fazerPedido = (cliente,...nomePizza)=>{
    pedidos.push()


};

module.exports = {listarPizzas, listarCategoria, logo};