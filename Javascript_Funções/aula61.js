// Funções Geradoras -> Entregam um valor por vez a cada vez que ela é chamada,
// funções geradoras nunca retornam todos os valores de uma só vez. Pode ser considerada
// e utilizada para uma boa performance

// Yield -> é uma forma de "Return" dentro das funções geradoras caso tenha mais um de valor
// que precisa ser retornado. é possivel utilizar o "return" também.

function* geradora1() {
  yield "Valor 1";
  yield "Valor 2";
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };

  yield function () {
    console.log("Vim do y2");
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
