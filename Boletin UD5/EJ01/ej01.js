formulario.consultar.addEventListener("click", mostarDatos);

function mostarDatos() {
	for (const actor of formulario.actores) {
		if (actor.checked) {
			console.log(actor.value);
		}
	}
}
