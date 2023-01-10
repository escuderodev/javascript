// criando classes
class Cliente{
    nome; 
    cpf;
};

class ContaCorrente{
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

const primeiraConta = new ContaCorrente();
primeiraConta.agencia = '1012';
primeiraConta.numero = '850408';
primeiraConta.deposita(1000);

const segundaConta = new ContaCorrente();
segundaConta.agencia = '8541';
segundaConta.numero = '584712';
segundaConta.deposita(1000);

console.log(`Primeira Conta R$: ${primeiraConta.getsaldo()}`);
console.log(`Segunda Conta R$: ${segundaConta.getsaldo()}\n`);

primeiraConta.saca(50);
segundaConta.deposita(50);

console.log(`Primeira Conta R$: ${primeiraConta.getsaldo()}`);
console.log(`Segunda Conta R$: ${segundaConta.getsaldo()}\n`);

segundaConta.transfere(50, primeiraConta);

console.log(`Primeira Conta R$: ${primeiraConta.getsaldo()}`);
console.log(`Segunda Conta R$: ${segundaConta.getsaldo()}\n`);

primeiraConta.deposita(-100);
