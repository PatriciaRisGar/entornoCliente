function suma() {
  document.getElementById("result").innerHTML =
    "El resultado de la suma es: " +
    (Number(formOperation.num1.value) + Number(formOperation.num2.value));
}
function resta() {
  document.getElementById("result").innerHTML =
    "El resultado de la resta  es: " +
    (Number(formOperation.num1.value) - Number(formOperation.num2.value));
}

function multi() {
  document.getElementById("result").innerHTML =
    "El resultado de la multiplicacion es: " +
    Number(formOperation.num1.value) * Number(formOperation.num2.value);
}

function division() {
  document.getElementById("result").innerHTML =
    "El resultado de la division es: " +
    Number(formOperation.num1.value) / Number(formOperation.num2.value);
}
