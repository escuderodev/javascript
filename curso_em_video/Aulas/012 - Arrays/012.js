// trabalhando com arrays / vetores
let numero = [10,23,31,44,50];

// acessando o valor de uma posição do array
// console.log(numero[1]);

// acrescentando valores a um array
// numero.push(2);
// numero.push(56);
// numero.push(94);

// verificando o tamanho de um array
console.log(`Tamanho do Array: ${numero.length}`);

// percorrendo um array
// for(var i = 0; i < numero.length; i++) {
//     console.log(numero[i]);
// };

// ordenando o array em ordem crescente
numero.sort();

// outra opção de for
for(let i in numero) {
    console.log(numero[i]);
}

// verificando a existêcia de um valor dentro do array
let numeroDigitado = 54;
let posicao = numero.indexOf(numeroDigitado);

if(posicao == -1) {
    console.log(`Valor ${numeroDigitado} não encontrado no Array.`);
} else {
    console.log(`Valor ${numeroDigitado} encontrado na posição ${numero.indexOf(numeroDigitado)}`);
}