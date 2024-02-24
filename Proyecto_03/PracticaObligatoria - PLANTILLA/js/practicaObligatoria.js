let comercialActual = 0;
let clienteActual = 0;
let clientesLocal = [];

document.addEventListener('DOMContentLoaded', recuperarDatos);

async function recuperarDatos() {
	clientesLocal.splice(0, clientesLocal.length);
	await recuperarClientes();
	recuperarComerciales();
	recuperarCategorias();
	recuperarProductos();
}

//Peticion para recibir los datos de clientes
async function recuperarClientes() {
	const url = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/clientes.json';

	const jsonRecuperado = await fetch(url);
	const objetos = await jsonRecuperado.json();
	const clientes = Object.values(objetos);
	asociarClientesAComercial(clientes);
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
		clientesLocal.push(clientesComercial);
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
	for (const cliente of clientesLocal[comercialActual]) {
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
	const selectsCategorias = document.getElementsByName('categorias');

	for (const selectCategorias of selectsCategorias) {
		let indice = 0;
		for (const categoria of categorias) {
			let option = document.createElement('option');
			option.value = categoria;
			option.textContent = categoria;
			option.addEventListener('click', function () {
				recuperarProductos();
			});
			selectCategorias.appendChild(option);
			indice++;
		}
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
	const categoriaSeleccionada = frmControles.categorias.selectedIndex;

	const selectProductos = document.getElementsByName('productos')[0];
	selectProductos.innerHTML = '';

	// la primera vez que se carga la pagina, el valor es -1 y no muestra productos.
	if (categoriaSeleccionada == -1) {
		categoriaSeleccionada + 1;
	}

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

// CRUD CATEGORIAS La lectura ya la hago para cargar el combobox

document.getElementById('btnGestionCategorias').addEventListener('click', crudCategorias);
frmNuevaCategoria.addEventListener('submit', guardarNuevaCategoria);
frmEditarCategoria.addEventListener('submit', actualizarCategoria);

function crudCategorias() {
	frmCategoria.style.display = '';
	frmCliente.style.display = 'none';
	// ocualtar el resto de formularios
}

function guardarNuevaCategoria(event) {
	const jsonCategoria = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/categorias.json';
	const categoria = frmNuevaCategoria.txtNuevaCategoria.value.trim();

	event.preventDefault();

	fetch(jsonCategoria, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(categoria),
	}).then((res) => res.json());
	setTimeout(recuperarCategorias, 800);
}

function actualizarCategoria(event) {
	event.preventDefault();
	const jsonCategoria = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/categorias.json';
	const categoriaSeleccionada = frmEditarCategoria.categorias.value;
	const cambioCategoria = frmEditarCategoria.txtEditarCategoria.value.trim();

	let key = '';
	fetch(jsonCategoria)
		.then((res) => res.json())
		.then((objRespuesta) => Object.entries(objRespuesta))
		.then((objRespuesta) =>
			objRespuesta.forEach((objetos) =>
				objetos.forEach(function (categoria) {
					if (categoria == categoriaSeleccionada) {
						key = String(objetos[0]);
					}
				})
			)
		);

	if (key) {
		fetch(jsonCategoria, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({[key]: cambioCategoria}),
		}).then((res) => res.json());

		setTimeout(recuperarCategorias, 800);
	}else{
		alert('Sn key' + key)
	}
}

// CRUD CLIENTE La lectura ya la hago para cargar el combobox

document.getElementById('btnGestionClientes').addEventListener('click', mostrarFrmCliente);
frmNuevoCliente.addEventListener('submit', guardarNuevoCliente);
// frmEditarCliente.addEventListener('submit', actualizarCliente);
// frmBorrarCliente.addEventListener('submit', borrarCliente);

function mostrarFrmCliente() {
	frmCategoria.style.display = 'none';
	frmCliente.style.display = '';
	// ocualtar el resto de formularios
}

async function guardarNuevoCliente(event) {
	event.preventDefault();
	const jsonCliente = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/clientes.json';
	const clienteNuevo = frmNuevoCliente.txtNuevoCliente.value.trim();
	const indiceComercialSeleccionado = frmComercial.comerciales.selectedIndex;
	const ultimaPosicion = clientesLocal[indiceComercialSeleccionado].length;
	let key = '';

	async function obtenerKey() {
		const response = await fetch(jsonCliente);
		const objRespuesta = await response.json();
		return String(Object.keys(objRespuesta)[indiceComercialSeleccionado]);
	}

	async function obtenerYAsignarKey() {
		try {
			key = await obtenerKey();
		} catch (error) {
			console.error('Error al obtener la clave:', error);
		}
	}
	await obtenerYAsignarKey();

	url = 'https://practicaobligatoriabloqueiii-default-rtdb.europe-west1.firebasedatabase.app/clientes/' + key + '.json';

	if (clienteNuevo !== '') {
		fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({[ultimaPosicion]: clienteNuevo}),
		}).then((res) => res.json());
		setTimeout(recuperarDatos, 800);
	} else {
		alert('Introduzca un nombre');
	}
}
