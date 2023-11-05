const fristArray = [];
const sortArray = [];

function add() {
  fristArray.push(document.getElementById("number").value);
  console.log(fristArray);
}

function sortArrays() {
  const auxArray = [];

  for (const value of fristArray) {
    if (fristArray.length % 2 == 0) {
      console.log("par Array");
      if (pair(value)) {
        sortArray.push(value);
      } else {
        auxArray.push(value);
      }
    } else {
      console.log("impar Array");
      if (pair(value)) {
        auxArray.push(value);
      } else {
        sortArray.push(value);
      }
    }
  }
  sortArray.push(auxArray);
  console.log(sortArray);
  document.getElementById("salida").innerHTML = sortArray.toString();
}

function pair(dato) {
  if (dato % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
