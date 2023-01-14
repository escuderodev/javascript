import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, numero, titular, saldoInicial) {
        super(agencia, numero, titular, saldoInicial);
    }

    // métodos de regra de negócio
    // sobrecrevendo o método saca da classe mãe
    saca(valor) {
        let taxa = 2.5;
        return this._saca(valor, taxa);
    }
    
}