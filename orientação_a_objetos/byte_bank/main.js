// importando classes
import { Cliente } from "./models/Cliente"
import { ContaCorrente } from "./models/ContaCorrente"

//utilizando as clases importadas
const primeiroCliente = new Cliente();
primeiroCliente.nome = "Eduardo Escudero";
primeiroCliente.cpf = "33188944318";

console.log(`Cliente: ${primeiroCliente.nome} CPF: ${primeiroCliente.cpf}`);



// const primeiraConta = new ContaCorrente();
// primeiraConta.agencia = '1012';
// primeiraConta.numero = '850408';
// primeiraConta.deposita(1000);

// const segundaConta = new ContaCorrente();
// segundaConta.agencia = '8541';
// segundaConta.numero = '584712';
// segundaConta.deposita(1000);

// console.log(`Primeira Conta R$: ${primeiraConta.getsaldo()}`);
// console.log(`Segunda Conta R$: ${segundaConta.getsaldo()}\n`);

// primeiraConta.saca(50);
// segundaConta.deposita(50);

// console.log(`Primeira Conta R$: ${primeiraConta.getsaldo()}`);
// console.log(`Segunda Conta R$: ${segundaConta.getsaldo()}\n`);

// segundaConta.transfere(50, primeiraConta);

// console.log(`Primeira Conta R$: ${primeiraConta.getsaldo()}`);
// console.log(`Segunda Conta R$: ${segundaConta.getsaldo()}\n`);

// primeiraConta.deposita(-100);
