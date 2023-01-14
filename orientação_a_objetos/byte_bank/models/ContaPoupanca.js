import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, numero, titular, saldoInicial) {
        super(agencia, numero, titular, saldoInicial);
    }

    // métodos de regra de negócio
    saca(valor) {
        let taxa = 2.5;
        const valorDesejado = valor + taxa;

        if(this._saldo >= valorDesejado) {
            console.log(`Saque de ${valor.toFixed(2)} realizado com sucesso!`);
            this._saldo -= valorDesejado;
        } else {
            console.log('Saldo insuficiente!');
        };
    }
    
}