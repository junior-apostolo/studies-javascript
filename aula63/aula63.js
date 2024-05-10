//               -5      -4       -3         -2         -1
//                0       1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice, delete, elem1, elem2, elem3)

// pop
// const removeLast = nomes.splice(-1, 1);

// shift
// const removeFirst = nomes.splice(0, 1);

// push
// const addLast = nomes.splice(nomes.length, 0, 'Luiz');

// Unshift
const addFirst = nomes.splice(0, 0, 'Luiz');

console.log(nomes, addFirst);