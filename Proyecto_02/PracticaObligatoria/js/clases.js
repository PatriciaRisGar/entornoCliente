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

class Catalogo {
	#productos = [];

	get productos() {
		return this.#productos;
	}
	set productos(productos) {
		this.#productos = productos;
	}

	constructor() {}

	addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
		const oProducto = new Producto(
			idProducto,
			nombreProducto,
			precioUnidad,
			idCategoria
		);
		this.#productos.push(oProducto);
	}
}

class LineaPedido {
	#unidades;
	#idProducto;

	get idProducto() {
		return this.#idProducto;
	}
	set idProducto(idProducto) {
		this.#idProducto = idProducto;
	}
	get unidades() {
		return this.#unidades;
	}
	set unidades(unidades) {
		this.#unidades = unidades;
	}

	constructor(unidades, idProducto) {
		this.#unidades = unidades;
		this.#idProducto = idProducto;
	}
}

class Cliente {
	#nombre;
	#cuentaAbierta;

	get cuentaAbierta() {
		return this.#cuentaAbierta;
	}
	set cuentaAbierta(cuentaAbierta) {
		this.#cuentaAbierta = cuentaAbierta;
	}
	get nombre() {
		return this.#nombre;
	}
	set nombre(nombre) {
		this.#nombre = nombre;
	}

	constructor(nombre, cuentaAbierta) {
		this.#nombre = nombre;
		this.#cuentaAbierta = cuentaAbierta;
	}
}

class Gestor {
	#categorias = [];
	#comerciales = [];
	#clientes = [];
	#comercialActual;
	#clienteActual;
	#pedidos = [];

	get pedidos() {
		return this.#pedidos;
	}
	set pedidos(pedidos) {
		this.#pedidos = pedidos;
	}
	get clienteActual() {
		return this.#clienteActual;
	}
	set clienteActual(clienteActual) {
		this.#clienteActual = clienteActual;
	}
	get comercialActual() {
		return this.#comercialActual;
	}
	set comercialActual(comercialActual) {
		this.#comercialActual = comercialActual;
	}
	get clientes() {
		return this.#clientes;
	}
	set clientes(clientes) {
		this.#clientes = clientes;
	}
	get comerciales() {
		return this.#comerciales;
	}
	set comerciales(comerciales) {
		this.#comerciales = comerciales;
	}
	get categorias() {
		return this.#categorias;
	}
	set categorias(categorias) {
		this.#categorias = categorias;
	}

	constructor() {}

	asociarClientesAComercial(comerciales, clientes) {
		this.#comerciales = comerciales;

		for (const indiceComerciales in comerciales) {
			this.#clientes.push([]);
		}
		for (const cliente in clientes) {
			const clientesObject = [];
			for (const nombreCliente of clientes[cliente]) {
				clientesObject.push(new Cliente(nombreCliente, false));
			}
			this.#clientes[cliente].push(clientesObject);
		}
		console.log(this.#clientes);
		this.#comercialActual = 0;
		this.#clienteActual = 0;
	}
}

class SelectView {
	cargarComerciales(comerciales) {
		const selectComerciales = document.getElementsByName('comerciales')[0];

		for (const comercial of comerciales) {
			let option = document.createElement('option');
			option.value = comercial;
			option.textContent = comercial;
			selectComerciales.appendChild(option);
		}
	}

	cargarCategorias(categorias) {
		const selectCategorias = document.getElementsByName('categorias')[0];

		let indice = 0;
		for (const categoria of categorias) {
			let option = document.createElement('option');
			option.value = indice;
			option.textContent = categoria;
			selectCategorias.appendChild(option);
			indice++;
		}
	}

	cargarProductos(productos) {
		const categoriaSeleccionada = frmControles.categorias.value;
		const selectProductos = document.getElementsByName('productos')[0];

		for (const producto of productos) {
			if (producto.idCategoria == categoriaSeleccionada) {
				let option = document.createElement('option');
				option.value = producto.nombreProducto;
				option.textContent = producto.nombreProducto;
				selectProductos.appendChild(option);
			}
		}
	}
}

class ClienteView {
	añadirCliente(clientes) {
		const formulario = document.getElementById('frmComercial');

		let indice = 0;
		for (const cliente of clientes) {
			let boton = document.createElement('button');
			boton.value = indice;
			boton.textContent = cliente.nombre;
			boton.setAttribute('class', 'cliente pagado');
			formulario.appendChild(boton);
			indice++;
		}
	}
}
