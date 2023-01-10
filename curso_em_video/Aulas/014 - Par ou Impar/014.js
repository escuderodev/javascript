// função que verifica se um número é par ou impar
function parOuImpar() {
    const numero = document.getElementById('num').value;
    const res = document.getElementById('resultado');

    if(numero % 2 === 0) {
        res.innerHTML = `O número ${numero} é Par.`;
    } else {
        res.innerHTML = `O número ${numero} é Impar.`;
    }
}


