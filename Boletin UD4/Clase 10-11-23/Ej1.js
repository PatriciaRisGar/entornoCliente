class Producto {
  #nombre;
  #unidades;
  #precio;
  constructor(nombre, unidades, precio) {
    this.#nombre = nombre;
    this.#unidades = unidades;
    this.precio = precio; // para que llame al set de precio
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  get unidades() {
    return this.#unidades;
  }
  set unidades(unidades) {
    this.#unidades = unidades;
  }
  get precio() {
    return this.#precio;
  }
  set precio(precio) {
    this.#precio = Math.abs(precio);
  }
  valorEnStock() {
    return this.precio * this.unidades;
  }
  incrementarStock(numero) {
    this.unidades += numero;
  }
  decrementarStock(numero) {
    this.unidades -= numero;
  }
}

let p = new Producto("Cacahuetes", 34, 8.45);
p.precio = 23.5;
console.log(p.precio);
console.log(p.valorEnStock());
p.incrementarStock(76);
p.precio = p.precio * 1.25;
console.log(p.nombre + " " + p.unidades + " " + p.precio);
//p.#nombre = "Almendras";
