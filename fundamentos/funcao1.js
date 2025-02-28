function imprimirSoma(valor1, valor2)
{
    console.log(valor1 + valor2)
}

imprimirSoma(10, 5)
imprimirSoma(10) //Retorna Nan porque o valor 2 está undefined


//funções com retorno
function soma(valor1, valor2)
{
    return valor1 + valor2
}

console.log(soma(2, 5))