for (let i = 0; i < 10; i++) {
    console.log(i)
}

// gera erro pois a variavel let só existe dentre daquele bloco
console.log(i)

const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()