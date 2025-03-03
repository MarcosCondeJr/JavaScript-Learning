function compras(trabalho1, trabalho2) {
    const comprarSorvetes = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvetes

    return {comprarSorvetes, comprarTv50, comprarTv32 ,manterSaudavel}
}

console.log(compras(true, false))