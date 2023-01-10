// trabalhando com js externo
// var nome = window.prompt('Qual é o seu nome?')
// var idade = window.prompt('Dgite sua idade:')
// console.log(nome)
// window.alert('Seu nome é ' + nome)
// console.log(idade)
// window.alert('Sua idade é ' + idade + ' anos')

// trabalhando com int
var n1 = parseInt(window.prompt('Digite o primeiro número:'))
var n2 = parseInt(window.prompt('Digite o segundo número:'))
var soma = n1 + n2

window.alert(`Resultado: ${n1} + ${n2} = ${soma}`)

// trabalhando com float
var v1 = parseFloat(window.prompt('Digite o primeiro valor R$:'))
var v2 = parseFloat(window.prompt('Digite o segundo valor R$:'))
var soma = v1 + v2

window.alert(`Resultado: ${v1.toFixed(2).replace('.',',')} + ${v2.toFixed(2).replace('.',',')} = ${soma.toFixed(2).replace('.',',')}`)

// formatando strings
var s = 'JavaScript'
var nome = 'Eduardo'
// utilizando concatenação
window.alert('O aluno ' + nome.toLowerCase() + ' está estudando ' + s)
// utilizando tamplate string
window.alert(`O aluno ${nome.toUpperCase()} está estudando ${s}`)

// verificando tamanho da string
window.alert(nome.length)

// var valor = 100.50
// valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
