// Dobrando os valores
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const double = numeros.map((n) => {
//     return n * 2;
// })

// console.log(double);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Wallace", idade: 32 },
  { nome: "Rosana", idade: 47 },
];

const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
const addId = pessoas.map(
  (obj, index) => {
    const newArray = { ...obj };
    newArray.id = index;
    return newArray;
  }
  // ({
  //     id: index + 1, ...obj
  // })
);

console.log(nomes);
console.log(idades);
console.log(addId);
console.log("Original", pessoas);
