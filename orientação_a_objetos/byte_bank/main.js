// importando classes
import { Cliente } from "./models/Cliente.js";
import { ContaCorrente } from "./models/ContaCorrente.js";

// utilizando as clases importadas
// const primeiroCliente = new Cliente();
// primeiroCliente.nome = "Eduardo Escudero";
// primeiroCliente.cpf = "33188944318";

const terceiroCliente = new Cliente('Eduardo Escudero', '33188942818');
console.log(`Cliente: ${terceiroCliente.nome} CPF: ${terceiroCliente.cpf}`);

// terceiroCliente.cpf = '33212333454';
// console.log(terceiroCliente.cpf);

// const novaConta = new ContaCorrente('1012', '850408', terceiroCliente);
// console.log(`Nova Conta = Ag: ${novaConta.agencia} - Número: ${novaConta.numero} - Titular: ${novaConta.titular.nome}`);

// const segundoCliente = new Cliente();
// segundoCliente.nome = "Carol Tobias";
// segundoCliente.cpf = "33123443234";

// console.log(`Cliente: ${primeiroCliente.nome} CPF: ${primeiroCliente.cpf}`);

// const primeiraConta = new ContaCorrente();
// primeiraConta.agencia = '1012';
// primeiraConta.numero = '850408';
// primeiraConta.titular = primeiroCliente;
// primeiraConta.deposita(1000);

// const segundaConta = new ContaCorrente();
// segundaConta.agencia = '8541';
// segundaConta.numero = '584712';
// segundaConta.titular = segundoCliente;
// segundaConta.deposita(1000);

// console.log(`Primeira Conta - Ag.: ${primeiraConta.agencia} Nº: ${primeiraConta.numero} Titular: ${primeiraConta.titular.nome} Saldo R$ ${primeiraConta.saldo}`);

// console.log(primeiraConta.titular.cpf);

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

const conta1 = new ContaCorrente(1012, 850408,terceiroCliente); 
console.log(ContaCorrente.numeroDeContas);
const conta2 = new ContaCorrente(1012, 222222,terceiroCliente); 
console.log(ContaCorrente.numeroDeContas);
const conta3 = new ContaCorrente(1012, 333333,terceiroCliente); 
console.log(ContaCorrente.numeroDeContas);
const conta4 = new ContaCorrente(1012, 444444,terceiroCliente); 
console.log(ContaCorrente.numeroDeContas);
const conta5 = new ContaCorrente(1012, 555555,terceiroCliente); 
console.log(ContaCorrente.numeroDeContas);