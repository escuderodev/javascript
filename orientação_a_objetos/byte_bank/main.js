// // realizando importações
import { Cliente } from "./models/Cliente.js"
import { ContaCorrente } from "./models/ContaCorrente.js"

const form = document.getElementById('form');

const cliente = new Cliente('Eduardo Escudero', 33188942818);
const contaCorrente = new ContaCorrente(1012, 850408, cliente, 1000);


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputAgencia = document.getElementById('agencia').value; 
    const inputNumero = document.getElementById('numero').value;
    const inputValor = parseFloat(document.getElementById('valor_desejado').value);

    if(inputAgencia == contaCorrente.agencia && inputNumero == contaCorrente.numero) {
        // let valorSacado = contaCorrente.saca(inputValor);
        console.log(`Saque de R$ ${valorSacado} realizado com sucesso!`);
    } else {
        console.log('Conta inválida!')
    }

    contaCorrente.saca();

    contaCorrente.saca(inputValor);
})

// funções auxiliares

