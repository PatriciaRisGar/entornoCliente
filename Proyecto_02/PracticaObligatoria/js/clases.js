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

		// defino la longitud del array
		for (const indiceComerciales in comerciales) {
			this.#clientes.push([]);
		}
		// creo los objetos clientes y lo meto en un array auxiliar para luego añadirselo al comercial correspondiente
		for (const cliente in clientes) {
			const clientesObject = [];
			for (const nombreCliente of clientes[cliente]) {
				clientesObject.push(new Cliente(nombreCliente, false));
			}
			this.#clientes[cliente].push(clientesObject);
		}
		//al inicio del programa comercial y cliente son el primero de cada array
		this.#comercialActual = 0;
		this.#clienteActual = 0;

		console.log(gestor.clientes);
	}
}

// carga de los combobox
class View {
	#controlador;
	constructor(controlador) {
		this.#controlador = controlador;
	}
	// añadir comerciales a combobox
	cargarComerciales(comerciales) {
		const selectComerciales = document.getElementsByName('comerciales')[0];

		for (const comercial of comerciales) {
			let option = document.createElement('option');
			option.value = comercial;
			option.textContent = comercial;
			option.addEventListener('click', this.#controlador.cambioComercial);
			selectComerciales.appendChild(option);
		}
	}
	// añadir categorias a combobox
	cargarCategorias(categorias) {
		const selectCategorias = document.getElementsByName('categorias')[0];

		let indice = 0;
		for (const categoria of categorias) {
			let option = document.createElement('option');
			option.value = indice;
			option.textContent = categoria;
			option.addEventListener(
				'click',
				this.cargarProductos(catalogo.productos)
			);
			selectCategorias.appendChild(option);
			indice++;
		}
	}
	// añadir productos a combobox dependiendo cual sea la categoria seleccionada
	cargarProductos(productos) {
		const categoriaSeleccionada = frmControles.categorias.value;
		const selectProductos = document.getElementsByName('productos')[0];
		selectProductos.innerHTML = '';

		for (const producto of productos) {
			if (producto.idCategoria == categoriaSeleccionada) {
				let option = document.createElement('option');
				option.value = producto.idProducto;
				option.textContent = producto.nombreProducto;
				selectProductos.appendChild(option);
			}
		}
	}

	// carga de clientes
	añadirCliente(clientes) {
		const formulario = document.getElementById('frmComercial');

		//Si hay clientes los borro antes de añadir
		const botones = formulario.getElementsByTagName('button');
		if (botones.length > 0) {
			for (var i = botones.length - 1; i >= 0; --i) {
				botones[i].remove();
			}
		}

		const div = document.createElement('div');
		formulario.appendChild(div);

		let indice = 0;
		for (const cliente of clientes) {
			const boton = document.createElement('button');
			boton.value = indice;
			boton.textContent = cliente.nombre;
			boton.setAttribute('class', 'cliente pagado');
			boton.addEventListener('click', controlador.actualizarClienteActual);
			div.appendChild(boton);
			indice++;
		}
		this.pintarH2();
	}
	//Pintar en div pedido
	pintarH2() {
		const formularioPedidos = document.getElementById('pedido');
		if (formularioPedidos.getElementsByTagName('h2')[0]) {
			formularioPedidos.getElementsByTagName('h2')[0].remove();
		}
		const h2 = document.createElement('h2');
		h2.textContent =
			'Cliente ' +
			gestor.clientes[gestor.comercialActual][0][gestor.clienteActual].nombre;
		formularioPedidos.append(h2);
	}

	//Pintar tabla pedido
	pintarPedido(lineaPedido) {
		const infoPedido = document.getElementById('pedido');
		let precioUnidad;
		let nombreProducto;
		for (const producto of catalogo.productos) {
			if (producto.idProducto == lineaPedido.idProducto) {
				precioUnidad = producto.precioUnidad;
				nombreProducto = producto.nombreProducto;
			}
		}

		this.limpiarPedido();
		const div = document.createElement('div');
		infoPedido.append(div);

		const h3 = document.createElement('h3');
		h3.textContent = 'TOTAL = ' + lineaPedido.unidades * precioUnidad;
		div.appendChild(h3);

		const botonFinPedido = document.createElement('button');
		botonFinPedido.textContent = ' PEDIDO ENVIADO Y COBRADO ';
		botonFinPedido.classList.add('boton');
		div.appendChild(botonFinPedido);

		const divTable = document.createElement('div');
		div.appendChild(divTable);
		const tabla = `
			<table>
				<thead>
					<tr>
						<th>Modificar</th>
						<th>Uds.</th>
						<th>Id.</th>
						<th>Producto</th>
						<th>Precio</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Modificar</td>
						<td>${lineaPedido.unidades}</td>
						<td>${lineaPedido.idProducto}</td>
						<td>${nombreProducto}</td>
						<td>${precioUnidad}</td>
					</tr>
				</tbody>
			</table>`;
		divTable.innerHTML = tabla;
	}

	//Elimino el div generado en pedido
	limpiarPedido() {
		const infoPedido = document.getElementById('pedido');
		const divHijo = infoPedido.querySelector('div');
		if (divHijo) {
			divHijo.parentNode.removeChild(divHijo);
		}
	}
}

class Controlador {
	//le paso a la vista el controlador
	view = new View(this);

	// funciones llamadas por eventos
	cambioComercial = () => {
		gestor.comercialActual = frmComercial.comerciales.selectedIndex;
		this.view.añadirCliente(gestor.clientes[gestor.comercialActual][0]);
	};

	//combobox categorias cambia combobox productos
	cambiarProductos = () => {
		const categoriaSeleccionada = frmControles.categorias.value;
		catalogo.productos[categoriaSeleccionada];
	};

	//Clic en boton cliente. Ponemos el id cliente como clienteActual
	actualizarClienteActual = (event) => {
		event.preventDefault();
		gestor.clienteActual = parseInt(event.target.value);
		this.view.pintarH2();
	};

	// Poner evento en cada boton del teclado unidades para cargar pedido
	añadirEventoATeclado = () => {
		const teclado = document.getElementById('teclado');
		const botones = teclado.getElementsByTagName('input');
		for (const boton of botones) {
			boton.addEventListener('click', this.crearPedido);
		}
	};

	//genero un pedido
	crearPedido = (event) => {
		const unidades = event.target.value;
		const producto = frmControles.productos.value;
		const lineaPedido = new LineaPedido(unidades, producto);

		// for (const comercial of gestor.pedidos) {
		// 	for (const cliente of gestor.pedidos[comercial]) {
		// 		for (const lineaPedido of gestor.pedidos[comercial][cliente]) {
		// 			console.log(comercial);
		// 			console.log(cliente);
		// 			console.log(lineaPedido);
		// 			if (pedido === lineaPedido) {
		// 			}
		// 		}
		// 	}
		// }

		gestor.pedidos = [gestor.comercialActual];
		gestor.pedidos.comercialActual = [gestor.clienteActual];
		gestor.pedidos.comercialActual.clienteActual = [lineaPedido];

		const botonesClientes = frmComercial.getElementsByTagName('button');
		for (const boton of botonesClientes) {
			if (boton.value == gestor.clienteActual) {
				boton.classList.add('pendiente');
			}
		}
		this.view.pintarPedido(lineaPedido);
	};
}
