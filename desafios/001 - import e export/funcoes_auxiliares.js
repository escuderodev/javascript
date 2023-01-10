function calculaMedia(nota1, nota2, nota3) {
    // console.log(('Média: ' + (nota1 + nota2 + nota3) / 3));
    return (nota1 + nota2 + nota3) / 3;
};

function printMensagem(mensagem) {
    console.log(mensagem);
};

module.exports = {calculaMedia, printMensagem};