formulario.boton.addEventListener("click", mostarDatos);

function mostarDatos() {
	texto =
		formulario.provincias.options[formulario.provincias.selectedIndex].text;
	valor =
		formulario.provincias.options[formulario.provincias.selectedIndex].value;

	console.log("Provincia: " + texto + " - Valor: " + valor);
}
