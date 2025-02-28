{
    {
        var imprimir = 'sera que imprime?'
    }
}
console.log(imprimir) //Ela imprime pois o var entende que a variavel é global
                      //E a variavel var só se diferencia dentro de um escopo de função

//exemplo

function testando()
{
    var teste = 'teste'
}

console.log(teste) //da erro 