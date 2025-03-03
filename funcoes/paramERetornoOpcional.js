function area(largura, altura) {
    const valorArea = largura * altura
    if( valorArea > 20) {
        console.log(`Valor acima do permitido ${valorArea}m2.`)
    } else {
        return valorArea
    }
}

console.log(area(10, 40))
console.log(area(10)) // undefined
console.log(area()) // Nan
console.log(area(10, 5, 4, 4)) // Pega somente os dois primeiros numeros