function calculate() {
  const name = document.getElementById("name").value;
  const surnames = document.getElementById("surnames").value;

  const completeName = name + surnames;
  const count = document.replaceAll(" ", "");

  document.getElementById("result").innerHTML = "El resultado es: " + count;
}
