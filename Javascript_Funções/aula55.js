//IIFE -> Immediately invoked function expression
// Função auto executavel que não precisa ser chamada novamente.
(function () {
  const sobrenome = "Miranda";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('João'));
  }

  falaNome();
})();