let t = [2, 8, 3, 5, 1, 0, 9, 6];

imprimirArray(t, "entrada");
t.sort(ordenacionParesDelante);
imprimirArray(t, "salida1");
t.sort(ordenacionImparesDelante);
imprimirArray(t, "salida2");

function ordenacionParesDelante(a, b) {
  //Pares delante
  let rdo;
  if (a % 2 == b % 2) {
    rdo = a - b;
  } else if (a % 2 == 0) {
    rdo = -1;
  } else {
    rdo = 1;
  }
  return rdo;
}

function ordenacionImparesDelante(a, b) {
  //Impares delante
  let rdo;
  if (a % 2 == b % 2) {
    rdo = a - b;
  } else if (a % 2 != 0) {
    rdo = -1;
  } else {
    rdo = 1;
  }
  return rdo;
}

function imprimirArray(tabla, ubicacionSalida) {
  document.getElementById(ubicacionSalida).innerHTML = tabla.join(" - ");
}
