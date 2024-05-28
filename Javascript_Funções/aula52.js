// Escopo léxico -> Se refere à área do código onde uma variável é acessível. 
// Em outras palavras, é o contexto no qual uma variável existe

const nome = "Luiz";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Otavio";
  falaNome();
}

usaFalaNome();
