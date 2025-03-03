function rand({ min=0, max=1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

obj = {min: 50, max: 100}
console.log(rand(obj))


// Destructuring com array
function randArray ([min = 0, max = 1000]) {
    if( min > max ) [min, max] = [max, min]
    const valor = Math.random() * (max, min) + min
    return Math.floor(valor)
} 

console.log(randArray([10, 5]))