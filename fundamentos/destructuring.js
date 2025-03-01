// Destructuring com objteo

const pessoa = {
    nome: 'Marcos',
    idade: 18,
    endereco: {
        logradouro: 'Rua Exemplo',
        numero: '18'
    }
}

// Extrai os valores do objeto pessoa
const {nome, idade} = pessoa
console.log(nome, idade)

// extrai os valores e nomea elas
const {nome: nomePessoa, idade: idadePessoa} = pessoa
console.log(nomePessoa, idadePessoa)

// pega no objeto endereço dentro do objeto pessoa
const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)