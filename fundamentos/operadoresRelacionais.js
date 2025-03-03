/**
 * == igual
 * === extritamente igual, compara o valor e o tipo
 * != diferente
 */

console.log('1)', '1' == 1) // retorna true porque o valores são iguais
console.log('2)', '1' === 1) // retorna false porque o tipo são diferentes
console.log('3)', '3' != 3) 
console.log('4)', '3' !== 3) 

console.log('5)', 3 < 2) 
console.log('6)', 3 > 2) 
console.log('7)', 3 <= 2) 
console.log('8)', 3 >= 2) 

const dt1 = new Date(0)
const dt2 = new Date(0)

console.log('9)', dt1 == dt2)
console.log('10)', dt1 === dt2)
console.log('11)', dt1.getTime() === dt2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)