

const botao = document.getElementById('botao');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    soma(num1, num2);
})

function soma(num1, num2) {
    console.log(num1 + num2);
}