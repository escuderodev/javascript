// realizando importações
import {Cliente} from "./models/Cliente.js"
import {ContaCorrente} from "./models/ContaCorrente.js"

const cliente1 = new Cliente("Eduardo", 33188942818);
const cliente2 = new Cliente("Carol", 33104296871);

const contaCorrenteEduardo = new ContaCorrente(1012, cliente1);
const contaCorrenteCarol = new ContaCorrente(4432, cliente2);

contaCorrenteEduardo.deposita(1000);
contaCorrenteCarol.deposita(1000);

let valor = 200;
contaCorrenteCarol.transfere(valor, contaCorrenteEduardo);

console.log(contaCorrenteEduardo.saldo);
console.log(contaCorrenteCarol.saldo);

