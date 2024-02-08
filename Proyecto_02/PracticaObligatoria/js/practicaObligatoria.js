const comerciales = [
	'Carmen Gómez',
	'Lucía Gil',
	'Andrés Martínez',
	'Antonio Salinas',
];
const clientes = [
	[
		'Alimentación Daniel',
		'Cash El Puerto',
		'Ultramarinos Claudia',
		'Supermercado Nazareno',
		'Alimentación Guzmán',
		'Supermercado Superprecio',
		'Kiosko La Espera',
		'M&B Alimentación',
		'Ultramarinos Vistabella',
	],
	[
		'Ultramarinos La Delicia',
		'Supermercado La Esquinita',
		'Alimentación Gómez',
		'Supermercado El Veloz',
		'Kiosko 24h Desavío',
		'Tienda La Manchega',
		'Ultramarinos Tajo',
		'Alimentación Víctor',
	],
	[
		'Alimentación Millán',
		'Supermercado La Guinda',
		'Kiosko Callejón',
		'Tienda Cantero',
		'Ultramarinos Mérida',
		'Alimentación Moreno',
		'Cash El Hostelero',
	],
	[
		'Kiosko La Lumbre',
		'Tienda Abad',
		'Ultramarinos Hernández',
		'Alimentación Cervantes',
		'Cash El Panal',
		'CyR Alimentación',
		'Supermercado Los Mosqueteros',
		'Alimentación Carpanta',
		'Supermercado El Percebe',
	],
];
const categorias = ['Aceite', 'Encurtidos', 'Salsas'];

const catalogo = new Catalogo();
const gestor = new Gestor();

function cargaDatosIniciales() {
	catalogo.addProducto(1, 'Aceite Oliva Virgen Extra 1l (Caja 20)', 178.15, 0);
	catalogo.addProducto(
		2,
		'Aceite Oliva Virgen Extra 700ml (Caja 30)',
		208.5,
		0
	);
	catalogo.addProducto(3, 'Aceite Oliva Virgen Extra 5l (Caja 6)', 247.5, 0);
	catalogo.addProducto(4, 'Aceite Oliva 1l (Caja 20)', 109.25, 0);
	catalogo.addProducto(5, 'Aceituna Gordal 340gr (Caja de 50)', 180.75, 1);
	catalogo.addProducto(
		6,
		'Aceituna Gordal deshuesada 350gr (Caja de 50)',
		205.45,
		1
	);
	catalogo.addProducto(7, 'Aceituna Manzanilla 250 gr (Caja de 50)', 124.85, 1);
	catalogo.addProducto(
		8,
		'Aceituna Manzanilla deshuesada 250 gr (Caja de 50)',
		141.35,
		1
	);
	catalogo.addProducto(9, 'Aceituna Negra 350gr (Caja de 50)', 87.5, 1);
	catalogo.addProducto(
		10,
		'Aceituna Negra deshuesada 350gr (Caja de 50)',
		99.35,
		1
	);
	catalogo.addProducto(11, 'Mayonesa 350gr (Caja de 50)', 124.45, 2);
	catalogo.addProducto(12, 'Mayonesa 1Kg (Caja de 30)', 178.65, 2);
	catalogo.addProducto(13, 'Salsa Cocktail 350gr (Caja de 50)', 99.65, 2);
	catalogo.addProducto(14, 'Salsa Gaucha 350gr (Caja de 50)', 124.85, 2);
	catalogo.addProducto(15, 'Salsa Alioli 350 gr (Caja de 50)', 113.75, 2);
	catalogo.addProducto(16, 'Salsa Barbacoa 500gr (Caja de 30)', 67.5, 2);
}

// Deberiamos controlar que el js se ejecute una vez que el DOM se haya cargado, en este caso no es necesario porque el fichero js es llamado al final del documento html.
cargaDatosIniciales();

// Voy a crear la clase Controlador que se encarge de la vista.
const controlador = new Controlador();
controlador.view.cargarComerciales(comerciales);
controlador.view.cargarCategorias(categorias);
controlador.view.cargarProductos(catalogo.productos);

//cargar clientes a su comercial
gestor.asociarClientesAComercial(comerciales, clientes);

//pintar cliente en html
controlador.view.añadirCliente(gestor.clientes[gestor.comercialActual][0]);

controlador.añadirEventoATeclado();