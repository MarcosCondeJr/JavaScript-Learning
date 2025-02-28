// Armazenando uma função em uma variavel
const imprimirSoma = function (valor1, valor2)
{
    console.log(valor1 + valor2)
}

imprimirSoma(10, 2)

// Armazenando uma funçãoo arrow em uma variavel
const soma = (valor1, valor2) => {
    return valor1 = valor2
}

console.log(soma) //retorna a função e o nome dela
console.log(soma(10, 15)) 


// retorno implicito
const subtracao = (a, b) => a -b
console.log(subtracao(5, 2))

const imprimir = a => console.log(a)
imprimir('Ola mundo')