const minutes = 0;
const seconds = 0;
const deci = 0;
let actualitation;

function startCrono() {
  actualitation = setInterval(plus(), 100);
  document.getElementById("solution").innerHTML = actualitation;
}

function plus() {
  deci++;
  if (deci == 9) {
    seconds++;
    deci = 0;
    if (seconds == 59) {
      minutes++;
      seconds = 0;
      deci = 0;
    }
  }
  show();
}

function show() {
  document.getElementById("solution").innerHTML =
    minutes + ":" + seconds + ":" + deci;
}
