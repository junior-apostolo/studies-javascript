function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject(false);
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

const promises = [
  esperaAi("Promise 1", rand(1, 5)),
  esperaAi("Promise 2", rand(1, 5)),
  esperaAi("Promise 3", rand(1, 5)),
  // esperaAi(1000, rand(1, 5)),
];

// Promise.all -> resolve todas as promises. Porém se uma cair no erro ele retorna somente o erro.
Promise.all(promises)
  .then((response) => {
    console.log(response + " PROMISES ALL");
  })
  .catch((erro) => {
    console.log(erro);
  });

// Promise.race -> entrega sempre o primeiro valor/promise resolvido.
Promise.race(promises)
  .then((response) => {
    console.log(response + " PROMISES RACE");
  })
  .catch((erro) => {
    console.log(erro);
  });

function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("Baixei a pagina", 3000);
  }
}

baixaPagina()
  .then((response) => {
    console.log(response);
  })
  .catch((e) => console.log("ERROR: ", e));
