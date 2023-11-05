const dniArray = [];
const intervalo20 = setInterval(peticionDNI, 10000);

function peticionDNI() {
  let peticion = '<button onclick="add()">Aceptar</button>';

  document.getElementById("btn").innerHTML = peticion;
}

function add() {
  document.getElementById("btn").innerHTML = "";
  const dniInput = document.getElementById("dni").value;
  if (dniInput != -1) {
    dniArray.push(dniInput);
  } else {
    extraerLetra();
  }
}

function extraerLetra() {
  let msg = "";

  for (const dni of dniArray) {
    console.log(dni);
    msg += dni.charAt(8);
  }
  document.getElementById("salida").innerHTML = msg;
}
