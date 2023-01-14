// realizando importações
import {Cliente} from "./models/Cliente.js"
import {ContaCorrente} from "./models/ContaCorrente.js"
import {ContaPoupanca} from "./models/ContaPoupanca.js";

const cliente1 = new Cliente("Eduardo", 33188942818);

const contaCorrente = new ContaCorrente(1012, cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1);

contaCorrente.deposita(1000);

console.log(`Conta Corrente - Saldo R$: ${contaCorrente.saldo}`);
console.log(`Conta Poupanca - Saldo R$: ${contaPoupanca.saldo}`);