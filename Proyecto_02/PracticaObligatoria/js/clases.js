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
		const oProducto = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria);
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

	asociarClientesAComercial(clientes) {
		for (let i = 0; i < clientes.length; i++) {
			const clientesComercial = [];
			const clientesComercialActual = clientes[i];
			for (const nombreCliente of clientesComercialActual) {
				clientesComercial.push(new Cliente(nombreCliente, false));
			}
			this.#clientes.push(clientesComercial);
		}
		//al inicio del programa comercial y cliente son el primero de cada array
		this.#comercialActual = 0;
		this.#clienteActual = 0;
	}
}

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
			option.addEventListener('click', function () {
				// añadir productos a combobox dependiendo cual sea la categoria seleccionada al producirse el evento
				const categoriaSeleccionada = frmControles.categorias.value;
				const selectProductos = document.getElementsByName('productos')[0];
				selectProductos.innerHTML = '';

				for (const producto of catalogo.productos) {
					if (producto.idCategoria == categoriaSeleccionada) {
						let option = document.createElement('option');
						option.value = producto.idProducto;
						option.textContent = producto.nombreProducto;
						selectProductos.appendChild(option);
					}
				}
			});
			selectCategorias.appendChild(option);
			indice++;
		}
	}

	cargarProductos(productos) {
		// añadir productos a combobox dependiendo cual sea la categoria seleccionada
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
	añadirCliente() {
		const formulario = document.getElementById('frmComercial');

		//Si hay clientes los borro antes de añadir
		const botones = formulario.getElementsByTagName('button');
		if (botones.length > 0) {
			for (let i = botones.length - 1; i >= 0; --i) {
				botones[i].remove();
			}
		}

		const div = document.createElement('div');
		formulario.appendChild(div);

		let indice = 0;
		for (const cliente of gestor.clientes[gestor.comercialActual]) {
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
		h2.textContent = 'Cliente ' + gestor.clientes[gestor.comercialActual][gestor.clienteActual].nombre;
		formularioPedidos.append(h2);
	}

	//Pintar tabla pedido
	pintarPedido() {
		const infoPedido = document.getElementById('pedido');
		let total = 0;

		this.limpiarPedido();
		const div = document.createElement('div');
		infoPedido.append(div);

		const h3 = document.createElement('h3');
		for (const lineaPedido of gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
			for (const producto of catalogo.productos) {
				if (lineaPedido.idProducto == producto.idProducto) {
					total += lineaPedido.unidades * producto.precioUnidad;
				}
			}
		}
		h3.textContent = 'TOTAL = ' + total;
		div.appendChild(h3);

		const botonFinPedido = document.createElement('button');
		botonFinPedido.textContent = ' PEDIDO ENVIADO Y COBRADO ';
		botonFinPedido.classList.add('boton');
		botonFinPedido.addEventListener('click', this.eliminarPedido);
		div.appendChild(botonFinPedido);

		const divTable = document.createElement('div');
		div.appendChild(divTable);
		let tabla = `
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
				<tbody>`;
		for (const lineaPedido of gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
			tabla += `<tr>
						<td> 
						<button class='boton' value=${lineaPedido.idProducto} name='btnAñadirUnidad'> + </button>
						<button class='boton' value=${lineaPedido.idProducto} name='btnRestarUnidad'> - </button>
						</td> 
						<td>${lineaPedido.unidades}</td>
						<td>${lineaPedido.idProducto}</td>`;
			for (const producto of catalogo.productos) {
				if (lineaPedido.idProducto == producto.idProducto) {
					tabla += `
					<td>${producto.nombreProducto}</td>
					<td>${producto.precioUnidad * lineaPedido.unidades}</td>
					</tr>`;
				}
			}
		}
		tabla += ` 
				</tbody>
			</table>`;
		divTable.innerHTML = tabla;

		//añadir unidad
		const botonesAñadirUnidad = document.getElementsByName('btnAñadirUnidad');
		const contextoThis = this; // para no perder quien es this dentro del for.
		for (const posicionBoton of botonesAñadirUnidad) {
			posicionBoton.addEventListener('click', function () {
				for (const lineaPedido of gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
					if (lineaPedido.idProducto == posicionBoton.value) {
						lineaPedido.unidades++;
					}
				}
				contextoThis.limpiarPedido();
				contextoThis.pintarPedido();
			});
		}

		// restar unidad
		const botonesRestarUnidad = document.getElementsByName('btnRestarUnidad');
		for (const posicionBoton of botonesRestarUnidad) {
			posicionBoton.addEventListener('click', function () {
				for (const lineaPedido of gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
					if (lineaPedido.idProducto == posicionBoton.value) {
						if (lineaPedido.unidades == 1) {
							if (confirm('¿Esta seguro que quiere eliminar este producto del pedido?')) {
								gestor.pedidos[gestor.comercialActual][gestor.clienteActual] = gestor.pedidos[gestor.comercialActual][gestor.clienteActual].filter((lp) => lp != lineaPedido);
							}
						}
						lineaPedido.unidades--;
					}
				}
				contextoThis.limpiarPedido();
				contextoThis.pintarPedido();
			});
		}
	}

	//Elimino el div generado en pedido
	limpiarPedido = () => {
		const infoPedido = document.getElementById('pedido');
		const divHijo = infoPedido.querySelector('div');
		if (divHijo) {
			infoPedido.removeChild(divHijo);
			// divHijo.parentNode.removeChild(divHijo); // Tambien se puede asi
		}
	};

	eliminarPedido = () => {
		if (confirm('¿Estás seguro que quieres dar por finalizado este pedido?')) {
			this.limpiarPedido();
			gestor.pedidos[gestor.comercialActual][gestor.clienteActual] = [];
			const botonesClientes = frmComercial.getElementsByTagName('button');
			for (const boton of botonesClientes) {
				if (boton.value == gestor.clienteActual) {
					console.log(boton.classList);
					boton.classList.remove('pendiente');
					boton.classList.add('pagado');
				}
			}
		}
		return;
	};
}

class Controlador {
	//le paso a la vista el controlador
	view = new View(this);

	// Actualizo quien es el comercial actual y cargo sus clientes en la view
	cambioComercial = () => {
		gestor.clienteActual = 0;
		gestor.comercialActual = frmComercial.comerciales.selectedIndex;
		this.view.añadirCliente();
	};

	//combobox categorias cambia combobox productos
	cambiarProductos = () => {
		const categoriaSeleccionada = frmControles.categorias.value;
		catalogo.productos[categoriaSeleccionada];
	};

	//Clic en boton cliente. Ponemos el id cliente como clienteActual
	actualizarClienteActual = (event) => {
		event.preventDefault(); // Al tener botones dentro de un formulario recarga la pagina
		gestor.clienteActual = parseInt(event.target.value);
		this.view.limpiarPedido();
		this.view.pintarH2();
		//compruebo si hay un pedido abierto para pintarlo
		if (gestor.pedidos[gestor.comercialActual] && gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
			this.view.pintarPedido();
		}
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

		if (!gestor.pedidos[gestor.comercialActual]) {
			gestor.pedidos[gestor.comercialActual] = [];
		}

		if (!gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
			gestor.pedidos[gestor.comercialActual][gestor.clienteActual] = [];
		}

		for (const pedido of gestor.pedidos[gestor.comercialActual][gestor.clienteActual]) {
			if (pedido.idProducto == producto) {
				alert('Ya existe este producto en el pedido, si quiere modificar la cantidad utilice los controles de la cuenta');
				return;
			}
		}

		const lineaPedido = new LineaPedido(unidades, producto);
		gestor.pedidos[gestor.comercialActual][gestor.clienteActual].push(lineaPedido);

		const botonesClientes = frmComercial.getElementsByTagName('button');
		for (const boton of botonesClientes) {
			if (boton.value == gestor.clienteActual) {
				boton.classList.add('pendiente');
			}
		}
		this.view.pintarPedido();
	};
}
