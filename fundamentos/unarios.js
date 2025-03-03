let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // retorna true porque o num2 só sera decrementado a após a comparação
console.log(num1 === num2)