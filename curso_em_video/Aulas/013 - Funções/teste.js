// trabalhando com funções
const produto = 'pão';
const dinheiro = 5.00;
const quantidade = 5;
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
        console.log('Produto inválido! Digite pão ou leite.')
    }
}

function validaCompra(valorCompra, dinheiro) {
    if(dinheiro >= valorCompra) {
        let troco = dinheiro - valorCompra;
        console.log(`Você quer comprar ${quantidade} unidades de ${produto}. Valor da Compra R$ ${valorCompra.toFixed(2)}, Dinheiro ${dinheiro.toFixed(2)}, Troco R$ ${troco.toFixed(2)}`);
    } else {
        console.log(`Você quer comprar ${quantidade} unidades de ${produto}. Valor da Compra R$ ${valorCompra.toFixed(2)}, Dinheiro ${dinheiro.toFixed(2)}. Você não tem dinheiro suficiente!`);
    }
};

comprar(produto, quantidade, dinheiro);