
escolheArea()

function escolheArea() {

    let area = prompt('Qual área de estudo deseja seguir? Digite 1 para Front-end ou 2 para Back-end:')
    let espec = null

    if(area == 1) {
        alert('Você escolheu Front-end!')
        espec = prompt('O que mais você quer aprender em Front-end? 1 - React ou 2 - Vue')

    } else {
        alert('Você escolheu Back-end!')
        espec = prompt('Qual linguagem Back-end deseja aprender? 3 - Java ou 4 - C#')

    }

    if(espec == 1) {
        alert('Você escolheu React')
    } else if(espec == 2) {
        alert('Você escolher Vue')
    } else if(espec == 3) {
        alert('Você escolher aprender Java')
    } else {
        alert('Você escolher aprender C#')
    }

    let contEspc = prompt('Agora que você já é Desenvolvedor, digite 1 - Continuar se Especializando ou 2 - Se tornar FullStack')

    especializa(contEspc)
}

function especializa(contEspc) {
    if(contEspc == 1) {
        alert('Você escolheu continuar se especializando!')
    } else {
        alert('Você escolheu se tornar FullStack!')
    }
}
