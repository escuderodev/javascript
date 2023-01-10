
function validaDados() {
    let userPadrao = 'escuderodev';
    let passPadrao = '123456';

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    console.log(`User: ${user} Senha: ${pass}`)
    if(user == userPadrao && pass == passPadrao) {
        alert('Login realizado com sucesso!');
        location.href = "https://escuderodev.com.br";
    } else {
        alert('Senha ou usuário inválido!');
    }
    
}

