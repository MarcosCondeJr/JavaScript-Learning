// função padrão
let dobro = function (a) {
    return 2 * a
}

// função arrow
dobro = (a) => {
    return 2 * a
}

// função arrow com return implicito
dobro = (a) => 2 * a
console.log(dobro(2))

let ola = () => {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())