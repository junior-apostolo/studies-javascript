// arguments sustenta todos os argumentos enviado
function funcao(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c)
}

funcao(1,2,3,4,5);
