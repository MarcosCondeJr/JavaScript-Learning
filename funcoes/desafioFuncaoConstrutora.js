function Pessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu Nome é ${nome}`)
    }
}

const p1 = new Pessoa('Marcos')
p1.falar()