// Arrays contém valor por referencia
// No exemplo abaixo mesmo criando uma nova variavel e atribuindo o valor de nomes, qualquer alteração
// feita em 'novo' ira refletir tambem em 'nomes'. 

// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes;

// console.log(novo);


// Split -> Separa uma string em um array, de acordo com a regra que voce aderir, no exemplo abaixo
// esta determinando um espaço entre os nomes 
// const nome = 'Luiz Otavio Miranda';
// const nomes = nome.split(' ');
// console.log(nomes);

// JOIN -> Pode transformar um array em string novamente juntando os nomes
const nomes = [ 'Luiz', 'Otavio', 'Miranda' ];
const nome = nomes.join(' ');
console.log(nome)


