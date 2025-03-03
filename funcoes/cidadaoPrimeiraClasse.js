// Função em JS é First-Class Object (Citizens)
// Higer-order function

// Criar de forma literal
function func1() { }

// Armazenar em uma variavel
const func2 = function() { }

// Armazenar em um array
const array = [function (a, b) { return a+b }, func1, func2]
console.log(array[0](10, 5)) // Pego a função da posição 0 e passoa os parametros

const obj = {} 
obj.falar = function () { return "Falei" }

console.log(obj.falar())

// Passando função como parametro
function run(funcao) {
    funcao()
}

run(function () { console.log('executando') })

// Uma função pode retornar/conter uma função
function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(10, 5)(5)
// ou
const calculo = soma(10,5)
calculo(4)