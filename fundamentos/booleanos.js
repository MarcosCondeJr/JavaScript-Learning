let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo);
console.log(!!isAtivo);

//O !! significa não não
console.log('Os verdadeiros');
console.log(!!3);
console.log(!![]);
console.log(!!'texto');
console.log(!!Infinity);
console.log(!!(isAtivo = true));


console.log('Os Falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Finalização');
console.log(!!(null || '' || 0 || 'texto'));

//A variavel nome esta vazia, então o retorno sera false, na operacao o 
// desconhecido esta sendo true, então resultado do console vai ser Desconhecido
let nome = '';
console.log(nome || 'Desconhecido');