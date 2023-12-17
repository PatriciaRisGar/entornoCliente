const oAgencia = new Agencia();

const cliente1 = new Cliente("30425617F", "Patricia", "Riscart Garcia");
const cliente2 = new Cliente("98765432W", "Alvaro", "Sanchez Cabrera");

const moto1 = new Moto("1234ABC", "Harley", "Road Glide", true);
const moto2 = new Moto("5678DEF", "Yamaha", "T-Max", false);

const coche1 = new Coche("9101GHI", "Ford", "Focus", "Gasolina", 5);
const coche2 = new Coche("1121JKL", "Toyota", "Yaris", "Híbrido", 7);

oAgencia.altaCliente(cliente1);
oAgencia.altaCliente(cliente2);

oAgencia.altaVehiculo(moto1);
oAgencia.altaVehiculo(moto2);
oAgencia.altaVehiculo(coche1);
oAgencia.altaVehiculo(coche2);

const alquiler1 = new Alquiler(
  1,
  cliente1,
  [coche1, moto1],
  new Date(2024, 0, 1),
  new Date(2024, 0, 10)
);
const alquiler2 = new Alquiler(
  2,
  cliente2,
  [coche2, moto1],
  new Date(2024, 0, 5),
  new Date(2024, 0, 15)
);

oAgencia.altaAlquiler(alquiler1);
oAgencia.altaAlquiler(alquiler2);

function inicializarCliente() {
  let intDNI = frmAltaCliente.intDNI.value.trim();
  let txtNombre = frmAltaCliente.txtNombre.value.trim();
  let txtApellidos = frmAltaCliente.txtApellidos.value.trim();

  let oCliente = new Cliente(intDNI, txtNombre, txtApellidos);

  oAgencia.altaCliente(oCliente);
  actualizarFormAlquiler();
}

function averiguarVehiculo(miRadio) {
  if (miRadio.value == "moto") {
    document.getElementsByClassName("frmMoto")[0].style.display = "block";
    document.getElementsByClassName("frmCoche")[0].style.display = "none";
  } else {
    document.getElementsByClassName("frmMoto")[0].style.display = "none";
    document.getElementsByClassName("frmCoche")[0].style.display = "block";
  }
}

function inicializarVehiculo() {
  let sMatricula = frmAltaVehiculo.sMatricula.value.trim();
  let sMarca = frmAltaVehiculo.sMarca.value.trim();
  let sModelo = frmAltaVehiculo.sModelo.value.trim();

  if (frmAltaVehiculo.moto.checked) {
    let bCiclomotor = false;
    if (frmAltaVehiculo.cCiclomotor.checked) {
      bCiclomotor = true;
    }
    let oMoto = new Moto(sMatricula, sMarca, sModelo, bCiclomotor);
    oAgencia.altaVehiculo(oMoto);
  } else {
    let sCombustible = document.frmAltaVehiculo.slcCombustible.value;
    let nPuerta = frmAltaVehiculo.nPuerta.value.trim();
    let oCoche = new Coche(sMatricula, sMarca, sModelo, sCombustible, nPuerta);
    oAgencia.altaVehiculo(oCoche);
  }
  actualizarFormAlquiler();
}

function actualizarFormAlquiler() {
  let fInicio = new Date(frmAlquiler.fInicio.value);
  let fFin = new Date(frmAlquiler.fFin.value);

  let selectClientes = document.getElementsByClassName("slcCliente");
  for (const selectCliente of selectClientes) {
    selectCliente.innerHTML = "";
  }
  for (const cliente of oAgencia.clientes) {
    for (const selectCliente of selectClientes) {
      let option = document.createElement("option");
      option.value = cliente.usuario;
      option.text = cliente.usuario;
      selectCliente.appendChild(option);
    }
  }

  let vehiculosDisponibles = document.getElementById("slcVehiculos");
  vehiculosDisponibles.innerHTML = "";
  for (const vehiculo of oAgencia.vehiculos) {
    if (!oAgencia.comprobarVehiculoAlquilado(vehiculo, fInicio, fFin)) {
      let option = document.createElement("option");
      option.value = vehiculo.matricula;
      option.text =
        vehiculo.matricula + " - " + vehiculo.marca + " - " + vehiculo.modelo;
      vehiculosDisponibles.appendChild(option);
    } else {
      alert("vehiculo no disponible");
    }
  }
}

function inicializarAlquiler() {
  let fInicio = new Date(frmAlquiler.fInicio.value);
  let fFin = new Date(frmAlquiler.fFin.value);
  let fActual = new Date();

  if (fInicio < fActual) {
    alert("No es posible, revise la fecha de inicio de alquiler");
    return;
  }
  if (fFin < fActual) {
    alert("No es posible, revise la fecha de fin del alquiler");
    return;
  }

  let vehiculosDisponibles = Array.from(frmAlquiler.slcVehiculos.options);
  let vehiculoSeleccionado = vehiculosDisponibles.filter(
    (elem) => elem.selected
  );
  arrayMatriculas = vehiculoSeleccionado.map((option) => option.value);
  console.log(arrayMatriculas);

  let vehiculosAlquilados = [];
  for (const matricula of arrayMatriculas) {
    vehiculosAlquilados.push(
      oAgencia.vehiculos.filter(
        (vehiculo) => vehiculo.matricula == matricula
      )[0]
    );
  }

  let usu = oAgencia.clientes.filter(
    (usua) => usua.usuario == frmAlquiler.slcCliente.value
  )[0];

  let id = Math.ceil(Math.random() * 1000);
  oAlquiler = new Alquiler(id, usu, vehiculosAlquilados, fInicio, fFin);

  oAgencia.altaAlquiler(oAlquiler);
}

function mostrarListadoClientes() {
  oAgencia.listadoClientes();
}

function mostrarListadoVehiculos() {
  oAgencia.listadoVehiculos();
}

function mostrarListadoAlquileresCliente() {
  oAgencia.listadoAlquileresCliente(frmAlquileresCliente.elegirCliente.value);
}

function mostrarlistadoAlquileres() {
  let fInicio = new Date(frmAlquileresEntreFechas.fechaInicio.value);
  let fFin = new Date(frmAlquileresEntreFechas.fechaFin.value);

  oAgencia.listadoAlquileres(fInicio, fFin);
}

function borrarAlquiler() {
  if (parseInt(frmBorrarAlquiler.idBorrar.value) > 1000) {
    alert("idAlquiler no válido");
  }

  for (const alquiler of oAgencia.alquileres) {
    if (frmBorrarAlquiler.idBorrar.value == alquiler.idAlquiler) {
      oAgencia.bajaAlquiler(alquiler);
    }
  }
}
