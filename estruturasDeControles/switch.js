const imprimirNota = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Reprovado')
            break
        default: 
            console.log('Nota Invalida')
        }
}

imprimirNota(7)
imprimirNota(10)