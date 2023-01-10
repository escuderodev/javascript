const resultado = document.getElementById('resultado');
const resPesquisa = document.getElementById('res_pesquisa');
let nome = prompt('Qual o seu nome?');
let idade = parseInt(prompt('Quantos anos você tem?'));
let linguagem = prompt('Qual linguagem de programação você está estudando?');

resultado.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

let pesquisa = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));

if(pesquisa === 1) {
    resPesquisa.innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso!';
} else {
    resPesquisa.innerHTML = 'Ahh que pena... Já tentou aprender outras linguagens?';
};