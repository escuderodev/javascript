class Teste{
    _saldo = 0;

    deposita(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log(`Deposito de R$ ${valor} realizado com sucesso!`);
        };
    };

    getSaldo() {
        return this._saldo;
    }
};

const primeiroTeste = new Teste();
primeiroTeste.deposita(1000);
console.log(primeiroTeste.getSaldo());