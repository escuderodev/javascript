var nome = 'Eduardo'
var idade = 38
var cpf = '34234554332'
var salario = 4700.00

console.log('Nome:', nome, 'CPF:', cpf, 'Idade:', idade, 'Salário R$:', salario.toFixed(2))

var n1 = 2
var n2 = 5

console.log(n1 + n2)

var n = 200
// verificando o tipo de dado das variáveis
console.log('nome is', typeof nome)
console.log('idade is', typeof idade)
console.log('cpf is', typeof cpf)
console.log('salario is', typeof salario)
console.log('n1 is', typeof n1)
console.log('n2 is', typeof n2)
console.log('n is', typeof n)

// outros usos do typeof
console.log('[] is', typeof [])
console.log('{} is', typeof {})
console.log('function is', typeof function() {})
console.log('NaN is', typeof NaN)
console.log('null is', typeof null)
