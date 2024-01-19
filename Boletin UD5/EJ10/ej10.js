document.body.addEventListener("contextmenu", function (event) {
	event.preventDefault();
	document.getElementById("salida").innerHTML =
		"Pulsado el boton derecho del boton ";
});

document.body.addEventListener(
	"click",
	() =>
		(document.getElementById("salida").innerHTML =
			"Pulsado el boton izquierdo del raton")
);
