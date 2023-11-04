function mostrarFecha() {
  const opcion = frmOpcion.opcion.value;
  const d = new Date();
  let salida = "";
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  switch (opcion) {
    case "fecha":
      salida =
        String(d.getDate()) +
        " / " +
        meses[d.getMonth()] +
        " / " +
        String(d.getFullYear());
      break;
    case "hora":
      salida = d.toLocaleTimeString();
      break;
    case "dia":
      salida = dias[d.getDay()];
      break;
    default:
      salida = dias[d.getDay()] + " " + d.toLocaleString();
  }

  document.getElementById("salida").innerHTML = salida;
}
