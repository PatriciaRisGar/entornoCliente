class Producto {
	#idProducto;
	#nombreProducto;
	#precioUnidad;
	#idCategoria;

	get idCategoria() {
		return this.#idCategoria;
	}
	set idCategoria(idCategoria) {
		this.#idCategoria = idCategoria;
	}
	get precioUnidad() {
		return this.#precioUnidad;
	}
	set precioUnidad(precioUnidad) {
		this.#precioUnidad = precioUnidad;
	}
	get nombreProducto() {
		return this.#nombreProducto;
	}
	set nombreProducto(nombreProducto) {
		this.#nombreProducto = nombreProducto;
	}
	get idProducto() {
		return this.#idProducto;
	}
	set idProducto(idProducto) {
		this.#idProducto = idProducto;
	}

	constructor(idProducto, nombreProducto, precioUnidad, idCategoria) {
		this.#idProducto = idProducto;
		this.#nombreProducto = nombreProducto;
		this.#precioUnidad = precioUnidad;
		this.#idCategoria = idCategoria;
	}
}

class Cliente {
	#nombre;

	get nombre() {
		return this.#nombre;
	}
	set nombre(nombre) {
		this.#nombre = nombre;
	}

	constructor(nombre) {
		this.#nombre = nombre;
	}
}