let ingresado;

while (true) {
  ingresado = parseInt(prompt("Ingrese un número: "));

  if (!isNaN(ingresado)) {
    break; 
  } else {
    console.log("Ingrese un número válido");
  }
}

if (ingresado === 0) {
  console.log("El factorial de 0 es 1");
  alert("El factorial de 0 es 1");
} else if (ingresado < 0) {
  console.log("No está definido el número negativo para el factorial");
  alert("No está definido el número negativo para el factorial");
} else {
  let acumulador = 1;
  let factorial = 1;
  let lista = [];
  while (acumulador <= ingresado) {
    lista.push(acumulador);
    factorial = factorial * acumulador;
    acumulador++;
  }
  console.log(`El factorial de tu número ingresado es ${factorial}`);
  alert(`El factorial de tu número ingresado es ${factorial}`);
}