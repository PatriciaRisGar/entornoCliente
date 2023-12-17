class Persona {
  #nombre;
  #apellidos;
  #edad;

  constructor(nombre, apellidos, edad) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#edad = edad;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(value) {
    this.#nombre = value;
  }
  get apellidos() {
    return this.#apellidos;
  }
  set apellidos(value) {
    this.#apellidos = value;
  }
  get edad() {
    return this.#edad;
  }
  set edad(value) {
    this.#edad = value;
  }
}

const p1 = new Persona("Pedro", "Suárez López", 45);
console.log(p1);
p1.apellidos = "Rodríguez García";
console.log(p1);
console.log(p1.#apellidos);
