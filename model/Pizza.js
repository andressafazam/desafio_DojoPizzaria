let pedidos = [
    { cliente:'Pedro', pizza:['Calabresa', 'Milho'], total: 0 },
    { cliente:'Marta', pizza:['Portuguesa', 'Brigadeiro', 'Brócolis'], total: 0 },
    { cliente:'Ana', pizza:['Mussarela'], total: 0 }
];

let pizzas = [
    { nome: "Mussarela", categoria: "Salgada", preco: 15 },{ nome: "Calabresa", categoria: "Salgada", preco: 15 },
    { nome: "Brasileira", categoria: "Salgada", preco: 20 },{ nome: "Peperoni", categoria: "Salgada", preco: 20 },
    { nome: "Portuguesa", categoria: "Salgada", preco: 25 },{ nome: "QuatroQueijos", categoria: "Salgada", preco: 25 },
    { nome: "Beijinho", categoria: "Doce", preco: 20 },{ nome: "Brigadeiro", categoria: "Doce", preco: 20 },
    { nome: "Prestígio", categoria: "Doce", preco: 25 },{ nome: "Sensação", categoria: "Doce", preco: 25 },
    { nome: "Milho", categoria: "Vegetariana", preco: 15 },{ nome: "Palmito", categoria: "Vegetariana", preco: 20 },
    { nome: "Brócolis", categoria: "Vegetariana", preco: 25 },{ nome: "Abobrinha", categoria: "Vegetariana", preco: 25 }
];

let categorias = ["Salgada", "Doce", "Vegetariana"];
let barra = `---------------------------------------------------------- <br>`;
let tab =`&nbsp`.repeat(7);

const logo = () =>{ 
    return `**************************************<br>
    ************<strong> Pizzaria Node </strong>*************
    <br>**************************************<br><br>`;
};

const listarPizzas = () =>{
    let conteudo = `----------------<strong> Catálogo de Pizzas </strong>----------------<br>`;
    for(let categ of categorias){
        conteudo+= listarCategoria(categ);
    }
    return conteudo;
};

const listarCategoria = categoria =>{
    let conteudo = `${barra} <strong> Pizzas ${categoria}s: </strong> <br> <br>`;
    for(let pizza of pizzas){
        let espaco = ".....";
        while ((pizza.nome+espaco).length < 32)
            espaco+=".";
        if(pizza.categoria == categoria)
            conteudo+=`${tab} - ${pizza.nome} ${espaco} R$ ${pizza.preco} <br>`;
    }
    return conteudo + barra;
}

const buscarPizza = nome =>{
    let conteudo = `${barra}`;
    let filtro = pizzas.filter( pizza => pizza.nome == nome);
    if(filtro.length != 0)
        for(let pizza of filtro)
            conteudo += `<strong> Pizza ${pizza.categoria}: </strong> <br> <br>
            ${tab} - ${pizza.nome} ..... R$ ${pizza.preco} <br>${barra}`;
    else 
        conteudo += `Pizza ${nome} não foi encontrada!<br>${barra}`;
    return conteudo;
};

const addPizza = (nome, categoria, preco) =>{
    let filtro = pizzas.filter( pizza => pizza.categoria == categoria);
    if(filtro.length == 0) 
        categorias.push(categoria);
    pizzas.push({ nome: nome, categoria: categoria, preco: preco });
    let conteudo = "* Pizza adicionada com sucesso ao catálogo! *<br><br>"
    return conteudo + listarPizzas(); 
}

const listarPedidos = () =>{
    let conteudo = `-----------------<strong> Lista de Pedidos </strong>------------------<br>`;
    let valor = 0;
    let valorTotal = 0;
    for(pedido of pedidos){
        conteudo += `${barra}<strong>${pedido.cliente}</strong><br>`;
        for(let pizza of pedido.pizza){
            valor = buscarPreco(pizza);
            conteudo += `${tab} - ${pizza}  ..... R$ ${valor}<br>`;
            valorTotal += valor;
        }
        conteudo += `&nbsp;`.repeat(58) + `<strong>Total:</strong>${valorTotal}<br>`;
        valorTotal = 0;
    }
    return conteudo + barra;
}

const buscarPreco = nome =>{
    let valor = 0;
    let filtro = pizzas.filter( pizza => pizza.nome == nome);
    for(let pizza of filtro)
        valor = pizza.preco;
    return valor;
};

const addPedido = (cliente,...listaDePizzas) =>{
    let arrayPizzas = [...listaDePizzas];
    pedidos.push({cliente: cliente, pizza: arrayPizzas});
    conteudo = `*** Pedido adicionado com sucesso a lista! ***<br><br>`;
    return conteudo + listarPedidos();
};

module.exports = {listarPizzas, listarCategoria, buscarPizza, addPizza, listarPedidos, buscarPreco, addPedido, logo};