function Produto(nome, preco, estoque) {
  // define uma nova propriedade diretamente em um objeto,
  // ou modifica uma propriedade já existente em um objeto, e retorna o objeto.
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar ou não
    configurable: false, // permite ou não reconfigurar o atributo Ex: delete
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: false, // pode alterar ou não
      configurable: false, // permite ou não reconfigurar o atributo Ex: delete
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: false, // pode alterar ou não
      configurable: false, // permite ou não reconfigurar o atributo Ex: delete
    },
  });
}

const p1 = new Produto("Camisa", 22, 5);
console.log(p1);

for (let chave in p1) {
  console.log(chave);
}
