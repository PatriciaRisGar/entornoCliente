/*Confeccionar un programa que permita cargar un número entero positivo de 
hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, ó 3 cifras. Mostrar 
un mensaje de error si el número de cifras no es 1, 2 ó 3. */

let numero = prompt("Introduzca caulquier número");

if (numero < 999) {
  alert("Estoy aqui");
} else {
  alert("El numero introducido es mayor de tres cifras");
}
