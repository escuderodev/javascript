//index.js

async function select() {
    // criando conexão
    const db = require("./db");
    console.log('Começou!');

    // buscando dados no banco
    console.log('select * from clientes;');
    const clientes = await db.selectCustomers();
    console.log(clientes);
};

async function insert() {
     // criando conexão
     const db = require("./db");
     console.log('Começou!');
 
     // buscando dados no banco
     console.log('insert into clientes;');
     const clientes = await db.insertCustomers({nome: "Carol Tobias", idade: 39, uf: "SP"});
     console.log(clientes);
}

insert();
// select();