// Callback é uma função que pode ou não ser recebida
// Uma função de callback é uma função que é passada como argumento para outra função,
//  e que é invocada (“chamada de volta”) em algum momento no futuro

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
      min;
    return Math.floor(num);
  }
  
  function f1(callback) {
    setTimeout(function() {
      console.log('f1');
      if (callback) callback();
    }, rand());
  }
  
  function f2(callback) {
    setTimeout(function() {
      console.log('f2');
      if (callback) callback();
    }, rand());
  }
  
  function f3(callback) {
    setTimeout(function() {
      console.log('f3');
      if (callback) callback();
    }, rand());
  }
  
  f1(f1Callback);
  
  function f1Callback() {
    f2(f2Callback);
  }
  
  function f2Callback() {
    f3(f3Callback);
  }
  
  function f3Callback() {
    console.log('Olá mundo!');
  }
  