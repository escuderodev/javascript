(async () => {
    const database = require('./db');
    const Cliente = require('./cliente');
    await database.sync();

    const novoCliente = await Cliente.create({
        nome: 'ana carolina tobias escudero',
        telefone: '11956184760',
        email: 'carol-tobias@hotmail.com',
        endereco: 'rua cristiano lobe, 160 apto 22b - cidade tiradentes - sp'
    })
    console.log(novoCliente);

})();