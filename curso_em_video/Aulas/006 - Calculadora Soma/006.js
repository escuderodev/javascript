
// função somar
function somar() {
    const valor1 = parseInt(document.getElementById('valor1').value)
    const valor2 = parseInt(document.getElementById('valor2').value)
    const res = document.getElementById('resultado')
    let resultado = valor1 + valor2
    res.innerHTML = 'Resultado: ' + resultado
}