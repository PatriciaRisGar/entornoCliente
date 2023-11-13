class Producto {
  _nombre;
  _unidades;
  _precio;

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get unidades() {
    return this._unidades;
  }
  set unidades(unidades) {
    this._unidades = unidades;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio.Math.abs();
  }

  constructor(nombre, unidades, precio) {
    this._nombre = nombre;
    this._precio = precio;
    this._unidades = unidades;
  }
}

const peras = new Producto("Peras", "1", 1);
