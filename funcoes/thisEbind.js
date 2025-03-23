const Pessoa = {
    saudacao: "Ola, bomdia",
    falar() {
        console.log(this.saudacao)
    }
}

Pessoa.falar()

const falar = Pessoa.falar
falar() // conflito entre paradigamas funcional e orientado

const falarDePessoa = Pessoa.falar.bind(Pessoa)
falarDePessoa()