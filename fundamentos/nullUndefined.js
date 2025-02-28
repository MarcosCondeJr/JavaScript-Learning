let valor
console.log(valor) //retorna undefined pois não definido

valor = null
console.log(valor) //retorna null

const produto = {}

console.log(produto.nome) // retorna undefined pois produto foi setado mais o nome não existe
console.log(produto) //retorna um obj vazio

produto.preco = null
console.log(produto.preco)