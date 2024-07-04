function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(new Error("Erro!!!"));

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all -> resolve todas as promises. Porém se uma cair no erro ele retorna somente o erro.
// Promise.race -> entrega sempre o primeiro valor/promise resolvido.
