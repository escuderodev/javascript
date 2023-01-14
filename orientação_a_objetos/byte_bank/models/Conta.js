import { Cliente } from "./Cliente.js";

export class Conta{
    constructor(agencia, numero, titular, saldoInicial) {
        this._agencia = agencia;
        this._numero = numero;
        this.titular = titular;
        this._saldo = saldoInicial;
    }

    // métodos de regra de negócio
    deposita(valor) {
        if(valor > 0) {
            this._saldo += valor;
            return valor;
        } else {
            return 0;
        };
    };

    saca(valor) {
        let taxa = 0;
        return this._saca(valor, taxa);
    };

    _saca(valor, taxa) {
        const valorDesejado = taxa + valor;

        if(this._saldo >= valorDesejado) {
            this._saldo -= valorDesejado;
            return valorDesejado;
        } else {
            return 0;
        };
    }

    transfere(valor, outraContra) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            outraContra.deposita(valor);
            return valor;
        } else {
            return 0;
        };
    };

    // getters e setters
    get agencia() {
        return this._agencia;
    };

    set agencia(agencia) {
        this._agencia = agencia;
    };

    get numero() {
        return this._numero;
    };

    set numero(numero) {
        this._numero = numero;
    };

    get saldo() {
        return this._saldo.toFixed(2);
    };

    get titular() {
        return this._titular;
    };

    set titular(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._titular = novoCliente;
        }
    };
}