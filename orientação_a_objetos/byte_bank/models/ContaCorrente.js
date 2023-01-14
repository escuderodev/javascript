import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(agencia, numero, titular) {
        super(agencia, numero, titular, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    // métodos de regra de negócio

    saca(valor) {
        let taxa = 5;
        const valorDesejado = valor + taxa;

        if(this._saldo >= valorDesejado) {
            console.log(`Saque de ${valor.toFixed(2)} realizado com sucesso!`);
            this._saldo -= valorDesejado;
        } else {
            console.log('Saldo insuficiente!');
        };
    }

};