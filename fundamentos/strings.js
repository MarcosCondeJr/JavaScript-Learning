const escola = "Senai";

//pega o caracter na posicao 3
console.log(escola.charAt(3));

//pega o digito referente ao caracter da posicao 3
console.log(escola.charCodeAt(3));

//Diz a posicao de onde a letra a está
console.log(escola.indexOf('a'));

//Trás o valor da variavel somente até a 3 posicao
console.log(escola.substring(0, 3));

//Concatena a string
console.log('Curso '.concat(escola).concat('!'));

//substitui valores de um determinado campo ou posicao
console.log(escola.replace(/\w/g, 'a'));

//transforma em array e usa a virgula como separador
console.log('Ana,Marcos,Pedro'.split(','));