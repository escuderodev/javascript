// trabalhando com funções
const produto = document.getElementById('produto').value;
const dinheiro = parseFloat(document.getElementById('dinheiro').value);
const quantidade = parseInt(document.getElementById('quantidade').value);
const mensagem = document.getElementById('mensagem');
const valorPao = 0.50;
const valorLeite = 5.00;
let valorCompra = 0.0;

function comprar(produto, quantidade, dinheiro) {
    if(produto === 'pão') {
        valorCompra = valorPao * quantidade;
        validaCompra(valorCompra, dinheiro);
    } else if(produto === 'leite') {
        valorCompra = valorLeite * quantidade;
        validaCompra(valorCompra, dinheiro);
    } else {
        mensagem.innerHTML = 'Produto inválido! Digite pão ou leite.';
    }
}

function validaCompra(valorCompra, dinheiro) {
    if(dinheiro >= valorCompra) {
        let troco = dinheiro - valorCompra;
        mensagem.innerHTML = `Você quer comprar ${quantidade} unidades de ${produto}. Valor da Compra R$ ${valorCompra.toFixed(2)}, Dinheiro ${dinheiro.toFixed(2)}, Troco R$ ${troco.toFixed(2)}`;
    } else {
        mensagem.innerHTML = `Você quer comprar ${quantidade} unidades de ${produto}. Valor da Compra R$ ${valorCompra.toFixed(2)}, Dinheiro ${dinheiro.toFixed(2)}. Você não tem dinheiro suficiente!`;
    }
};