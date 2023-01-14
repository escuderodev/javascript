class Conta {
    constructor(agencia, numero, titular, saldoInicial) {
        this._agencia = agencia;
        this._numero = numero;
        this.titular = titular;
        this._saldo = saldoInicial;
    }

    saca(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log(`Saque não realizado. Saldo insuficiente!`);
        };

    }

}

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    validaDados();
})

function validaDados() {
    const contaCorrente = new Conta(1012, 850408, 'Eduardo', 1000);

    const inputAgencia = document.getElementById('agencia').value;
    const inputNumero = document.getElementById('numero').value;
    const inputValor = parseFloat    (document.getElementById('valor_desejado').value);

    console.log(inputAgencia, inputNumero, inputValor);

    contaCorrente.saca(inputValor);
}
