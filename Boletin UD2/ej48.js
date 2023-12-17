function sumar() {
  const num1 = Number(frmCalculadora.num1.value);
  const num2 = Number(frmCalculadora.num2.value);
  let salida = String(num1) + " + " + String(num2) + " = ";
  salida += String(num1 + num2);
  document.getElementById("salida").innerHTML = salida;
}

function restar() {
  const num1 = Number(frmCalculadora.num1.value);
  const num2 = Number(frmCalculadora.num2.value);
  let salida = String(num1) + " - " + String(num2) + " = ";
  salida += String(num1 - num2);
  document.getElementById("salida").innerHTML = salida;
}

function multiplicar() {
  const num1 = Number(frmCalculadora.num1.value);
  const num2 = Number(frmCalculadora.num2.value);
  let salida = String(num1) + " x " + String(num2) + " = ";
  salida += String(num1 * num2);
  document.getElementById("salida").innerHTML = salida;
}

function dividir() {
  const num1 = Number(frmCalculadora.num1.value);
  const num2 = Number(frmCalculadora.num2.value);
  let salida = String(num1) + " / " + String(num2) + " = ";
  salida += String(num1 / num2);
  document.getElementById("salida").innerHTML = salida;
}
