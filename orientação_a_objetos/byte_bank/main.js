// realizando importações
import { Cliente } from "./models/Cliente.js"
import { ContaCorrente } from "./models/ContaCorrente.js"
import { ContaPoupanca } from "./models/ContaPoupanca.js";
import { Conta } from "./models/Conta.js";

const cliente1 = new Cliente("Eduardo", 33188942818);

const contaCorrente = new ContaCorrente(1012, 850408, cliente1, 0)
const contaPoupanca = new ContaPoupanca(1022, 434456, cliente1, 50);

contaCorrente.deposita(1000);
contaPoupanca.deposita(950);

console.log(`Conta Corrente - Saldo R$: ${contaCorrente.saldo}`);
console.log(`Conta Poupanca - Saldo R$: ${contaPoupanca.saldo}`);

contaCorrente.saca(100);
contaPoupanca.saca(100);

console.log(`Conta Corrente - Saldo R$: ${contaCorrente.saldo}`);
console.log(`Conta Poupanca - Saldo R$: ${contaPoupanca.saldo}`);
