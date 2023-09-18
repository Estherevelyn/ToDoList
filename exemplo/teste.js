var frutas = ['Abacaxi', 'morango', 'Kiwi', 'goiaba']

//Adiciona um item no final
frutas.push('uva')

//Adiciona um item no inicio
frutas.unshift('maça')

//Remove do inicio 
frutas.shift()

//Remove no final 
frutas.pop()

//Procurar a posicao do item no Array
let posicaoArray = frutas.indexOf('Kiwi')

frutas.splice(posicaoArray, 1)

// console.log(posicaoArray)
console.log(frutas)

var nome = "Lulu"

console.log(nome)

console.log(nome.toLowerCase())
console.log(nome.toUpperCase())