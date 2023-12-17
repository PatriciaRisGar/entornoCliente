let salida = false;
let numero;
let suma = 0;
let cadenaSalida = "";
do {
  numero = Number(prompt("Introduce un número: "));
  if (numero != 9999) {
    suma += numero;
  } else {
    salida = true;
  }
} while (!salida);
cadenaSalida = "La suma es " + suma + "<br>";
cadenaSalida +=
  suma > 0 ? "Mayor que cero" : suma < 0 ? "Menor que cero" : "Cero";
document.getElementById("salida").innerHTML = cadenaSalida;
