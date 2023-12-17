class Cliente {
  #dniCliente;
  #nombre;
  #apellidos;
  #usuario;
  get usuario() {
    return this.#usuario;
  }
  set usuario(usuario) {
    this.#usuario = usuario;
  }
  get apellidos() {
    return this.#apellidos;
  }
  set apellidos(apellidos) {
    this.#apellidos = apellidos;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  get dniCliente() {
    return this.#dniCliente;
  }
  set dniCliente(dniCliente) {
    this.#dniCliente = dniCliente;
  }

  constructor(dniCliente, nombre, apellidos) {
    this.#dniCliente = dniCliente;
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#usuario = (
      nombre.substring(0, 1) +
      apellidos.substring(0, 3) +
      apellidos.split(" ")[1].substring(0, 3) +
      dniCliente.substring(5, 8)
    ).toLowerCase();
  }
  toHTMLROW() {
    return `
      <tr>
        <td>${this.#dniCliente}</td>
        <td>${this.#nombre}</td>
        <td>${this.#apellidos}</td>
        <td>${this.#usuario}</td>
      </tr>
    `;
  }
}

class Vehiculo {
  #matricula;
  #marca;
  #modelo;

  get modelo() {
    return this.#modelo;
  }
  set modelo(modelo) {
    this.#modelo = modelo;
  }
  get marca() {
    return this.#marca;
  }
  set marca(marca) {
    this.#marca = marca;
  }

  get matricula() {
    return this.#matricula;
  }
  set matricula(matricula) {
    this.#matricula = matricula;
  }
  constructor(matricula, marca, modelo) {
    this.#matricula = matricula;
    this.#marca = marca;
    this.#modelo = modelo;
  }
  toHTMLROW() {
    return (
      this.#matricula + "</td> <td>" + this.#marca + "</td> <td>" + this.#modelo
    );
  }
}

class Moto extends Vehiculo {
  #ciclomotor;
  get ciclomotor() {
    return this.#ciclomotor;
  }
  set ciclomotor(ciclomotor) {
    this.#ciclomotor = ciclomotor;
  }
  constructor(matricula, marca, modelo, ciclomotor) {
    super(matricula, marca, modelo);
    this.#ciclomotor = ciclomotor;
  }
  toHTMLROW() {
    return (
      " <tr > <td> Moto </td><td> " +
      super.toHTMLROW() +
      "</td> <td>" +
      (this.#ciclomotor ? "si" : "no") +
      "</td> <td> - </td> <td> - </td> </tr>"
    );
  }
}

class Coche extends Vehiculo {
  #combustible;
  #plazas;
  get plazas() {
    return this.#plazas;
  }
  set plazas(plazas) {
    this.#plazas = plazas;
  }
  get combustible() {
    return this.#combustible;
  }
  set combustible(combustible) {
    this.#combustible = combustible;
  }
  constructor(matricula, marca, modelo, combustible, plazas) {
    super(matricula, marca, modelo);
    this.#combustible = combustible;
    this.#plazas = plazas;
  }
  toHTMLROW() {
    return (
      "<tr > <td> Coche </td><td> " +
      super.toHTMLROW() +
      "</td> <td> - </td> <td>" +
      this.#combustible +
      "</td> <td>" +
      this.#plazas +
      "</td> </tr>"
    );
  }
}

class Alquiler {
  #idAlquiler;
  #cliente;
  #vehiculos = [];
  #fechaInicio;
  #fechaFin;

  get fechaFin() {
    return this.#fechaFin;
  }
  set fechaFin(fechaFin) {
    this.#fechaFin = fechaFin;
  }
  get fechaInicio() {
    return this.#fechaInicio;
  }
  set fechaInicio(fechaInicio) {
    this.#fechaInicio = fechaInicio;
  }
  get vehiculos() {
    return this.#vehiculos;
  }
  set vehiculos(vehiculos) {
    this.#vehiculos = vehiculos;
  }
  get cliente() {
    return this.#cliente;
  }
  set cliente(cliente) {
    this.#cliente = cliente;
  }
  get idAlquiler() {
    return this.#idAlquiler;
  }
  set idAlquiler(idAlquiler) {
    this.#idAlquiler = idAlquiler;
  }
  constructor(idAlquiler, cliente, vehiculos, fechaInicio, fechaFin) {
    this.#idAlquiler = idAlquiler;
    this.#cliente = cliente;
    this.#vehiculos = vehiculos;
    this.#fechaInicio = fechaInicio;
    this.#fechaFin = fechaFin;
  }
  toHTMLROW() {}
}

class Agencia {
  #clientes = [];
  #alquileres = [];
  #vehiculos = [];

  get vehiculos() {
    return this.#vehiculos;
  }
  set vehiculos(vehiculos) {
    this.#vehiculos = vehiculos;
  }
  get alquileres() {
    return this.#alquileres;
  }
  set alquileres(alquileres) {
    this.#alquileres = alquileres;
  }
  get clientes() {
    return this.#clientes;
  }
  set clientes(clientes) {
    this.#clientes = clientes;
  }
  constructor() {
    this.#clientes = [];
    this.#alquileres = [];
    this.#vehiculos = [];
  }
  altaCliente(oCliente) {
    console.log(oCliente);
    this.#clientes.push(oCliente);
    console.log(this.#clientes);
  }
  altaVehiculo(oVehiculo) {
    for (const vehiculo of this.#vehiculos) {
      if (vehiculo.matricula == oVehiculo.matricula) {
        alert("No es posible guardar. La matricula ya esta registrada");
        return;
      }
    }
    this.#vehiculos.push(oVehiculo);
    console.log(this.#vehiculos);
  }
  altaAlquiler(oAlquiler) {
    this.#alquileres.push(oAlquiler);
  }
  bajaAlquiler(oAlquiler) {
    this.#alquileres = this.#alquileres.filter(
      (elem) => elem.idAlquiler != oAlquiler.idAlquiler
    );
    alert("Alquiler borrado");
  }
  listadoClientes() {
    let tableHTML = `
      <table class='table table-bordered'>
        <tr>
          <th>DNI</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Usuario</th>
        </tr>
    `;

    for (const cliente of this.#clientes) {
      tableHTML += cliente.toHTMLROW();
    }

    tableHTML += `</table>`;

    document.getElementById("tablaClientesContainer").innerHTML = tableHTML;
  }
  listadoVehiculos() {
    let tableHTML = `
          <table class='table table-bordered'>
        <tr >
          <th>Tipo</th>
          <th>Matricula</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ciclomotor</th>
          <th>Combustible</th>
          <th>Plazas</th>
        </tr>
    `;

    for (const vehiculo of this.#vehiculos) {
      tableHTML += vehiculo.toHTMLROW();
    }

    tableHTML += `</table>`;

    document.getElementById("tablaVehiculosContainer").innerHTML = tableHTML;
  }
  listadoAlquileres(fechaInicio, fechaFin) {
    let htmlTable =
      " <div class='container mt-4'> <h2>Listado de alquileres</h2><table class='table table-bordered'><thead><tr><th>ID Alquiler</th><th>Cliente</th><th>Vehículos</th> </tr> </thead> ";

    for (const alquiler of this.#alquileres) {
      if (
        alquiler.fechaInicio >= fechaInicio &&
        alquiler.fechaFin <= fechaFin
      ) {
        htmlTable +=
          "<tbody><tr><td>" +
          alquiler.idAlquiler +
          "</td> <td>" +
          alquiler.cliente.usuario +
          "</td> <td>";

        for (const vehiculo of alquiler.vehiculos) {
          htmlTable += vehiculo.matricula + "  ";
        }

        htmlTable += "</td></tr>";
      }
    }

    htmlTable += " </tbody> </table>";

    document.getElementById("tablaListadoAlquileresEntreFechas").innerHTML =
      htmlTable;
  }
  listadoAlquileresCliente(idCliente) {
    let htmlTable =
      "<div class='container mt-4'> <h2>Listado alquileres de " +
      idCliente +
      "</h2>";

    for (const alquiler of this.#alquileres) {
      if (alquiler.cliente.usuario == idCliente) {
        htmlTable +=
          "<table class='table table-bordered'>" +
          "<thead>" +
          "<tr>" +
          "<th>ID Alquiler</th>" +
          "<th>Vehículos</th>" +
          "<th>Fecha de Inicio</th>" +
          "<th>Fecha de Fin</th>" +
          "</tr>" +
          "</thead>" +
          "<tbody>" +
          "<tr>" +
          "<td>" +
          alquiler.idAlquiler +
          "</td> <td>";

        for (const coche of alquiler.vehiculos) {
          htmlTable += coche.matricula + " ";
        }

        htmlTable +=
          "</td> <td>" +
          alquiler.fechaInicio.getDate() +
          " / " +
          (alquiler.fechaInicio.getMonth() + 1) +
          " / " +
          alquiler.fechaInicio.getUTCFullYear() +
          "</td>" +
          "<td>" +
          alquiler.fechaFin.getDate() +
          " / " +
          (alquiler.fechaFin.getMonth() + 1) +
          " / " +
          alquiler.fechaFin.getUTCFullYear() +
          "</td>" +
          "</tr>" +
          "</tbody>" +
          "</table>" +
          "</div>";
      }
    }

    document.getElementById("tablaListadoAlquileresCliente").innerHTML =
      htmlTable;
  }

  comprobarVehiculoAlquilado(vehiculo, fInicio, fFin) {
    for (const alquiler of this.#alquileres) {
      for (const vehiculoAlquilados of alquiler.vehiculos) {
        if (vehiculoAlquilados.matricula == vehiculo.matricula) {
          if (
            (fInicio < alquiler.fechaFin && fFin > alquiler.fechaInicio) ||
            (fFin > alquiler.fechaInicio && fInicio < alquiler.fechaFin)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
