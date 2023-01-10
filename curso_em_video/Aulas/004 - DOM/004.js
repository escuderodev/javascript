console.log('funcionou!')

// var nome = 'Eduardo Escudero'
// var idade = 38

// document.write(`Meu nome é ${nome} e tenho ${idade} anos.`)

// selecinando o primeiro paragrafo pela tag e indice
// var p1 = document.getElementsByTagName('p')[1]
// document.write('<br><br> Está escrito assim: ' + p1.innerText)
// p1.style.color = 'red'

// alterando o corpo do html
// var corpo = document.body
// corpo.style.background = 'black'

// escrevendo na tela com a formatação HTML
// document.write('<br><br> Está escrito assim: ' + p1.innerHTML)

// alert('Está escrito assim: ' + p1.innerText)

// selecionando elementos pelo id
// var d = document.getElementById('msg')
// d.style.background = 'green'
// d.innerText = 'Aguardando Mensagem...'

// selecionando elementos por name
// var d = document.getElementsByName('msg')[0]
// d.innerText = 'Olá!'

var div = document.querySelector('#msg')
div.innerHTML = 'Salvar'

var resultado = document.querySelector('.resultado')
resultado.innerHTML = 'Esperando o resultado!'