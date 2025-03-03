const notas = [4.5, 4.8, 5.8, 6.8, 7.8]

for (let i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: "Marcos",
    idade: 18
}

for(let atributos in pessoa) {
    console.log(atributos + ' : ' + pessoa[atributos])
}