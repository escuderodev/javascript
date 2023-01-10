let qtdFatia = 4;

function comerPizza(qtdFatia) {
    let indice = 1;
    do {
        comerFatia(indice);
        qtdFatia -= 1;
        indice += 1;
    } while(qtdFatia > 0);
};

function comerFatia(indice) {
    console.log(`Comendo o ${indice}º pedaço de pizza...`)
};

comerPizza(qtdFatia);
