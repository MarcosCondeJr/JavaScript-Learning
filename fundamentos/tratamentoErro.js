function tratarErroELancar(erro) {
    throw new Error('Não possivel fazer essa operação')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Deu tudo certo')
    }
} 

const obj = { nome: 'Marcos'}
imprimirNomeGritado(obj)