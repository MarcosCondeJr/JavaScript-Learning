const nome = 'Marcos';
const concatenacao = 'Olá' + nome + '!';

const template = `Olá 
${nome}!`

console.log(template, concatenacao);

//função para deixar o texto grande 
const up = texto => texto.toUpperCase();

console.log('Olá '.concat(up(`${nome}`)))
