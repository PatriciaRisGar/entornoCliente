class Figura {
  #color;

  constructor(color) {
    this.#color = color;
  }
  get color() {
    return this.#color;
  }
  set color(color) {
    this.#color = color;
  }

  imprimir(color) {
    return "Soy una figura de color " + this.#color;
  }
}

class Rectangulo extends Figura {
  #base;
  #altura;

  constructor(color, base, altura) {
    super(color);
    this.#base = base;
    this.#altura = altura;
  }
  get altura() {
    return this.#altura;
  }
  set altura(altura) {
    this.#altura = altura;
  }
  get base() {
    return this.#base;
  }
  set base(base) {
    this.#base = base;
  }
  calcularArea() {
    return this.base * this.altura;
  }
  imprimir() {
    return (
      "Soy un rectángulo de color " + this.color + " de " + this.calcularArea()
    );
  }
}

class Circulo extends Figura {
  #radio;
  constructor(color, radio) {
    super(color);
    this.#radio = radio;
  }
  get radio() {
    return this.#radio;
  }
  set radio(radio) {
    this.#radio = radio;
  }
  calcularArea() {
    return Math.PI * Math.pow(this.radio, 2);
  }
  imprimir() {
    return (
      "Soy un circulo de color " + this.color + " de " + this.calcularArea()
    );
  }
}

const fig = new Figura("verde");
const rect = new Rectangulo("azul", 5, 6);
const circle = new Circulo("rojo", 2);

alert(fig.imprimir());
alert(rect.imprimir());
alert(circle.imprimir());
