function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      console.log(valor);
    },
  });
}

const p1 = new Produto("Camisa", 20, 3);
console.log(p1);
p1.estoque = "teste";
