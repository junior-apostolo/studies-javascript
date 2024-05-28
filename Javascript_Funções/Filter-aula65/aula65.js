// Filter -> retorna um novo Array, com a mesma quantidade de elementos ou menos.

// const numeros = [5, 10, 23, 45, 6, 2, 7, 95, 62, 8];
// const newArray = numeros.filter((valor, index) => {
//   console.log(valor, index);
//   return valor > 10;
// });
// console.log(newArray);


const pessoas = [
  {nome: 'Luiz', idade: 15},
  {nome: 'Julia', idade: 21},
  {nome: 'Miguel', idade: 16},
  {nome: 'Mari', idade: 48},
  {nome: 'Sergio', idade: 50},
  {nome: 'Luan', idade: 70},
]

// Retorna as pessoas que tem o nome com 5 letras ou mais
const array1 = pessoas.filter(obj => {
  return obj.nome.length >= 5
})
console.log("Pessoas que tem o nome com 5 letras ou mais: ", array1)


// Retorna as pessoas com mais de 50 anos
const array2 = pessoas.filter(obj => {
  if(obj.idade > 50) {
    return obj.nome
  } 
})
console.log("Pessoas com mais de 50 anos: ", array2)

// Retorna as pessoas onde nome termina com a letra 'A'
const array3 = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
})

console.log("pessoas onde nome termina com a letra 'A': ", array3)
