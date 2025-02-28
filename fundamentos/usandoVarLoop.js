// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// // imprime o ultimo numero gerado do loop porque esta usando var
// console.log(i)

const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//Retorna 10 porque esta recebendo de uma variavel var
funcs[2]()
funcs[6]()