function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    if(velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta
    }
    return velocidadeAtual

    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }

        return velocidadeAtual
    }  
}

uno = new Carro()
uno.acelerar()
console.log(uno.get_velociadade())