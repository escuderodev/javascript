// função para validar o peso
function validaPeso(peso) {
    if(peso < 0 || peso > 500) {
        console.log('Peso inválido! Digite o peso novamente.')
    }
};

// função para validar a altura
function validaAltura(altura) {
    if(altura < 0 || altura > 2.5) {
        console.log('Altura inválida! Informe uma altura entre 0.1 e 2.5');
    }
};

// exportando funções
module.exports = {validaPeso, validaAltura};