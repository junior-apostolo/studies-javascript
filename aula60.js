// Função Recursiva -> Função que se chama de volta
// Obs: Deve se ter atenção em quando a função recursiva deve parar de se chamar de volta.
function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}

recursiva(0);
