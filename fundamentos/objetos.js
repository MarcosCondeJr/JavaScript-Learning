// As {} cria um objeto vazio

const produto1 = {}
produto1.nome = 'Celular'
produto1.preco = 2050.99
produto1['desconto'] = 200 //Evitar atributos dessa forma

console.log(produto1)

//Abre os escopo do objeto e atribuis valores aos atribuitos

const produto2 = {
    nome: 'Camisa',
    preco: 100
}

console.log(produto2)

//formato Json, conjunto com chave e valor

'{ "nome" : "Celular", "preco":"1000"}'