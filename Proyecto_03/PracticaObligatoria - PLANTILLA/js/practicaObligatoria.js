let comercialActual = 0;
let clienteActual = 0;
let clientes = [];

document.addEventListener('DOMContentLoaded', () => {
	recuperarClientes();
	recuperarComerciales();
	recuperarCategorias();
	recuperarProductos();
});

//Peticion para recibir los datos de clientes
function recuperarClientes() {
	const url = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/clientes.json';
	fetch(url)
		.then((res) => res.json())
		.then((objRespuesta) => Object.values(objRespuesta))
		.then(asociarClientesAComercial)
		.catch(console.log);
}

//Peticion para recibir los datos de comerciales
function recuperarComerciales() {
	const url = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/comerciales.json';
	fetch(url)
		.then((res) => res.json())
		.then((objRespuesta) => Object.values(objRespuesta))
		.then(cargarComerciales)
		.catch(console.log);
}

// añadir comerciales a combobox
function cargarComerciales(comerciales) {
	const selectComerciales = document.getElementsByName('comerciales')[0];

	for (const comercial of comerciales) {
		let option = document.createElement('option');
		option.value = comercial;
		option.textContent = comercial;
		option.addEventListener('click', cambioComercial);
		selectComerciales.appendChild(option);
	}
	añadirCliente();
}

// logica para asignar a un comercial sus clientes
function asociarClientesAComercial(clientesPorComercial) {
	for (let i = 0; i < clientesPorComercial.length; i++) {
		const clientesComercial = [];
		const clientesComercialActual = clientesPorComercial[i];
		for (const nombreCliente of clientesComercialActual) {
			clientesComercial.push(new Cliente(nombreCliente));
		}
		clientes.push(clientesComercial);
	}
}

// carga de clientes
function añadirCliente() {
	const formulario = document.getElementById('frmComercial');

	//Si hay clientes los borro antes de añadir
	const botones = formulario.getElementsByTagName('div');
	if (botones.length > 0) {
		for (let i = botones.length - 1; i >= 0; --i) {
			botones[i].remove();
		}
	}

	const div = document.createElement('div');
	formulario.appendChild(div);

	let indice = 0;
	for (const cliente of clientes[comercialActual]) {
		const divCliente = document.createElement('div');
		divCliente.textContent = cliente.nombre;
		divCliente.setAttribute('class', 'cliente pagado');
		div.appendChild(divCliente);
		indice++;
	}
}

// Actualizo quien es el comercial actual y cargo sus clientes
cambioComercial = () => {
	comercialActual = frmComercial.comerciales.selectedIndex;
	añadirCliente();
};

//Peticion para recibir los datos de categorias
function recuperarCategorias() {
	const url = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/categorias.json';
	fetch(url)
		.then((res) => res.json())
		.then((objRespuesta) => Object.values(objRespuesta))
		.then(cargarCategorias)
		.catch(console.log);
}

// añadir categorias a combobox
function cargarCategorias(categorias) {
	const selectCategorias = document.getElementsByName('categorias')[0];

	let indice = 0;
	for (const categoria of categorias) {
		let option = document.createElement('option');
		option.value = indice;
		option.textContent = categoria;
		option.addEventListener('click', function () {
			recuperarProductos();
		});
		selectCategorias.appendChild(option);
		indice++;
	}
}

//Peticion para recibir los datos de productos
function recuperarProductos() {
	const url = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/productos.json';
	fetch(url)
		.then((res) => res.json())
		.then((objRespuesta) => Object.values(objRespuesta))
		.then(cargarProductos)
		.catch(console.log);
}

// añadir productos a combobox dependiendo cual sea la categoria seleccionada
function cargarProductos(productosRecuperados) {
	const categoriaSeleccionada = frmControles.categorias.value;
	const selectProductos = document.getElementsByName('productos')[0];
	selectProductos.innerHTML = '';

	for (const producto of productosRecuperados) {
		if (producto.idCategoria == categoriaSeleccionada) {
			let option = document.createElement('option');
			option.value = producto.idProducto;
			option.textContent = producto.nombreProducto;
			selectProductos.appendChild(option);
		}
	}
}

//combobox categorias cambia combobox productos
cambiarProductos = () => {
	const categoriaSeleccionada = frmControles.categorias.value;
	productos[categoriaSeleccionada];
};
