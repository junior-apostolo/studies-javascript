falaOI();

// Declaração de função (Function  hoisting)
function falaOI() {
  console.log("OIE");
}

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrowfunction");
};

funcaoArrow();
