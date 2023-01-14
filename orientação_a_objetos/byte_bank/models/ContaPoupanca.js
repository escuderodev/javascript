export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

     // métodos de regra de negócio
     deposita(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log('Depósito não realizado! O valor deve ser maior que R$ 0,00.');
        };
    };

    saca(valor) {
        if(this._saldo >= valor) {
            console.log(`Saque de ${valor.toFixed(2)} realizado com sucesso!`);
            this._saldo -= valor;
        } else {
            console.log('Saldo insuficiente!');
        };
    };

    transfere(valor, outraContra) {
        if(this._saldo >= valor) {
            console.log(`Transferência de ${valor.toFixed(2)} realizada com sucesso!`);
            this._saldo -= valor;
            outraContra.deposita(valor);
        } else {
            console.log('Saldo insuficiente!');
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