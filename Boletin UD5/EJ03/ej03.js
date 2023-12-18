formulario.boton.addEventListener("click", mostarDatos);

function mostarDatos() {
	for (const provincia of formulario.provincias) {
		if (provincia.selected) {
			console.log(
				"Provincia: " + provincia.text + " - Código: " + provincia.value
			);
		}
	}
}
