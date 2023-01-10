// coletando o paciente
var paciente = document.querySelector("#primeiro-paciente");

// coletando o peso
var peso = paciente.querySelector(".info-peso").textContent;

// coletando a altura
var altura = paciente.querySelector(".info-altura").textContent;
// console.log(altura);

// coletando o campo imc e atualizando o html
var imc = paciente.querySelector(".info-imc");
imc.innerHTML = calculaIMC(peso, altura);

// função que calcula o IMC
function calculaIMC(peso, altura) {
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(pesoValido && alturaValida) {
        // calculando o imc
        return peso / (altura * altura);
    } else {
        return 0;
    }
}

// função para validar o peso
function validaPeso(peso) {
    if(peso < 0 || peso > 500) {
        console.log('Peso inválido! Digite o peso novamente.')
        return false;
    } else {
        return true;
    }
};

// função para validar a altura
function validaAltura(altura) {
    if(altura < 0 || altura > 2.5) {
        console.log('Altura inválida! Informe uma altura entre 0.1 e 2.5');
        return false;
    } else {
        return true;
    }
};

