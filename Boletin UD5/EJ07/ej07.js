const teclado = document.getElementById("teclado");

teclado.addEventListener("clic", manejadorEvento);

function manejadorEvento(event) {
	if (event.target.tagName == "INPUT") {
		const salida = document.getElementById("salida");
		let digito = event.target.value;
		salida.value += digito;
	}
}
