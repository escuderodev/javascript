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
        return this._saca(valor, taxa);
    }
};