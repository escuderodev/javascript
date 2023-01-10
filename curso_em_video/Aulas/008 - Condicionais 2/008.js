function verificar() {
    const pais = 'Brasil';
    const input = document.getElementById('nac').value;
    const res = document.getElementById('res');

    if(input === pais) {
        res.innerHTML = 'Você é Brasileiro!';
    } else {
        res.innerHTML = 'Você é Estrangeiro!';
    }
};
