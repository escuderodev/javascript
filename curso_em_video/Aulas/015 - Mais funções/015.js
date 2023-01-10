let num = 1;

// calculando fatorial
function fatorial(num) {
    let fat = 1;
    for(let i = num; i > 1; i--) {
        fat *= i;
    }
    return fat;
};

console.log(fatorial(num));