const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const nota1 = 8.4514
const nota2 = 7.0000

const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2);

//toFixed só deixa somente 2 casa decimal para a visualização
//toString retorna o valor real da variavel
console.log(media.toFixed(2));
console.log(media.toString());
console.log(typeof media);

//Converte para number e faz o calculo
console.log("10" / 2);

//resultado infinito
console.log(7/ 0);

//Resultado Nan
console.log("texte" * 2);