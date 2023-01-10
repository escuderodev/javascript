let qtdFatia = 8;

function comerPizza(qtdFatia) {
    for(let i = 1; qtdFatia > 0; i++) {
        comerFatia(i);
        qtdFatia -= 1;
    }
};

function comerFatia(i) {
    console.log(`Comendo o ${i}º pedaço de pizza...`)
};

comerPizza(qtdFatia);
