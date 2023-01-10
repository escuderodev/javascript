
function calcular() {
    const velocidade = parseFloat(document.getElementById('velocidade').value);
    const resultado = document.getElementById('resultado');

    if(velocidade > 70) {
        console.log(`Sua velocidade é ${velocidade} Km/h.`)
        console.log('Você ultrapassou a velocidade permitida e foi multado!');
        resultado.innerHTML = `Sua velocidade é ${velocidade} Km/h. <br> Você ultrapassou a velocidade permitida e foi multado!`
    } else {
        console.log(`Sua velocidade é ${velocidade}.`)
        console.log('Você está dentro da velocidade permitida e pode seguir viagem!')
        console.log('Dirija sempre usando o cinto de segurança!')
        resultado.innerHTML = `Sua velocidade é ${velocidade}.<br> Você está dentro da velocidade permitida e pode seguir viagem!<br> Dirija sempre usando o cinto de segurança!`
    };
    
};



