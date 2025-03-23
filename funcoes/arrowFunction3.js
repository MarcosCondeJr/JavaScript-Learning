function comparaComThis(param) {
    console.log(this === param)
}

comparaComThis(global)

obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

comparaComThisArrow = (param) => console.log( this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// Nesse caso a função arrow é mais forte que o bind e impede que a função seja do obj
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)