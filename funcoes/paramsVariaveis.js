function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(10))
console.log(soma(10, 5))
console.log(soma('a', 'b', 'c'))