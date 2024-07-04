function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// resolve() -> sempre cai no then()
// reject() -> sempre cai no catch()

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error("Erro!!!"));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Frase 1", rand(1, 3))
  .then((response) => {
    console.log(response);
    return esperaAi("Frase 2", rand(1, 3));
  })
  .then((response) => {
    console.log(response);
    return esperaAi(3333, rand(1, 3));
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
// esperaAi('Frase 2', rand(1, 3));
// esperaAi('Frase 3', rand(1, 3));
