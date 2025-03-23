const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(10, 15)
imprimirResultado(10, 15, function(a, b) {
    return a -b
})

imprimirResultado(10, 5, (a, b) => a * b)

const Pessoa = {
    falar: function() {
        console.log('Falei')
    }
}

Pessoa.falar()