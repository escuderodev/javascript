//db.js
async function connect() {
    if(global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:1403@localhost:3306/crud");
    console.log('Conexão realizada com sucesso!');
    global.connection = connection;
    return connection;
};

connect();

// função select
async function selectCustomers() {
    const conn = await connect();
    return await conn.query('select * from clientes;');
}

// função insert
async function insertCustomers(customer) {
    const conn = await connect();
    const sql = 'insert into clientes (nome, idade, uf) values (?,?,?);';
    const values = [customer.nome, customer.idade, customer.uf];
    await conn.query(sql, values);

}

// expportação
module.exports = {selectCustomers, insertCustomers};