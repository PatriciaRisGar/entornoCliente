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

  constructor() {
    this.#productos = [];
  }

  addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
    // no se si realmente es necesario controlar si ya está incluido porque la interfaz no tiene para añadir producto
    for (const producto of this.#productos) {
      if (producto.idProducto == idProducto) {
        alert(
          'No es posible guardar. Este id de producto ya está en el catalogo'
        );
        return;
      }
    }
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

  constructor(
    categorias,
    comerciales,
    clientes,
    comercialActual,
    clienteActual,
    pedidos
  ) {}
}
