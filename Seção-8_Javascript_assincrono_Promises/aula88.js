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

async function executa() {
  try {
    const fase1 = await esperaAi('FASE 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi('FASE 2', rand());
    console.log(fase2);

    const fase3 = await esperaAi('FASE 3', rand());
    console.log(fase3);

  } catch (e) {
    console.log(e);
  }
}

// Existem alguns status para Promises: 
// pending: 
// fullfiled: 
// 