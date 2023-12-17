let cadenaSalida = "";
let primosEncontrados = 0;
let num = 1;
while (primosEncontrados < 100) {
  if (esPrimo(num)) {
    cadenaSalida += num + " - ";
    primosEncontrados++;
  }
  num++;
}

document.getElementById("salida").innerHTML = cadenaSalida;

function esPrimo(numero) {
  let limiteMaximo = Math.floor(Math.sqrt(numero));
  //Truncar la raiz cuadrada del número, es una propiedad matemática. Valdría comprobar hasta la mitad
  let primo = true;
  let i = 2;
  while (primo && i <= limiteMaximo) {
    if (numero % i == 0) {
      primo = false;
    } else {
      i++;
    }
  }
  return primo;
}
