class ContaCorrente {
    agencia;
    numero;
    _saldo = 0;

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

    getAgencia() {
        return this.agencia;
    };

    getNumero() {
        return this.numero;
    };

    getsaldo() {
        return this._saldo.toFixed(2);
    };

};