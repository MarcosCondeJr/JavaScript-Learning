// Factory: é uma função que retorna um objeto, ou seja ele tem a funão de ser uma fabrica e fabricar objetos quando for chamada

// Factory simples

function criarPessoa() {
    return {
        nome: 'Pessoa',
        idade: 18
    }
}

console.log(criarPessoa())