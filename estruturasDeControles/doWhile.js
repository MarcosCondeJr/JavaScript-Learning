function getValorAleatorio(max, min) {
    const valor = Math.random() * (max - min) - min
    return Math.floor(valor)
}

let opcao

do {
    opcao = getValorAleatorio(-1, 10)
    console.log('ta rodando')
} while (opcao != -1)