function procesarFormulairo() {
  const numForm = Number(frmNumero.numero.value);
  let salida = "";
  for (let i = 1; i < 10; i++) {
    salida += numForm + " x " + i + " = " + numForm * i + "<br>";
  }

  document.getElementById("salida").innerHTML = salida;
}

function procesarSelect() {
  const numSelect = Number(slcTabla.numero.value);
  let salida = "";
  for (let i = 1; i < 10; i++) {
    salida += numSelect + " x " + i + " = " + numSelect * i + "<br>";
  }

  document.getElementById("salida").innerHTML = salida;
}
