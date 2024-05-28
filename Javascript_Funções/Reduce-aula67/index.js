// utilizar o Reduce em casos que voce precisa reduzir o array
// em um unico elemento...

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Somando o valor total do Array
const total = numeros.reduce((acc, valor) => {
  acc += valor;
  return acc;
}, 0);

console.log(total);

// Retornando um array com os numeros pares
const pares = numeros.reduce((acc, valor) => {
  if (valor % 2 === 0) acc.push(valor);
  return acc;
}, []);

console.log(pares);

// Retornando um array com os numeros multiplicados por 2
const dobrando = numeros.reduce((acc, valor) => {
    acc.push(valor * 2);
    return acc;
}, []);

console.log(dobrando);
