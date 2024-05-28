
// Filtrando os valores pares, multiplicando e somando o valor total;
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const result = numeros.filter(val => {
    return val % 2 === 0;
}).map(val => {
    return val * 2; 
}).reduce((acc, val) => {
    return acc += val;  
})

console.log(result)