let mayores = 0;
let menores = 0;

function btonPulsado() {
  const nota1 = Number(frm.nota1.value);
  const nota2 = Number(frm.nota2.value);
  const nota3 = Number(frm.nota3.value);
  const nota4 = Number(frm.nota4.value);
  const nota5 = Number(frm.nota5.value);

  procesarNotas(nota1);
  procesarNotas(nota2);
  procesarNotas(nota3);
  procesarNotas(nota4);
  procesarNotas(nota5);

  document.getElementById("salida").innerHTML =
    "Mayores de 7: " + mayores + " <br> Menores de siete: " + menores;
}

function procesarNotas(nota) {
  nota >= 7 ? mayores++ : menores++;
}
