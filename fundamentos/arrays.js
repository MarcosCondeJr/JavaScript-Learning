const valores = [14, 20, 6, 10, 5];

console.log(valores[0]);

//caso tente acessar uma posição que não exista, ele retorna undefined
console.log(valores[5]);

valores[2] = 10;
console.log(valores);
console.log(valores.length);

//Adiciona valores ao array
valores.push(50, 'nomeTeste');
console.log(valores);

//As duas formas excluem valores do array
console.log(valores.pop())
delete valores[3];

console.log(valores);