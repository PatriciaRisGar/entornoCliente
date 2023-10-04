/*Se ingresan tres notas de un alumno, si el promedio es mayor o igual 
a 4 mostrar un mensaje 'apto', sino 'suspenso'.*/

let nota1 = Number(prompt("¿Cuál es la primera nota?"));
let nota2 = Number(prompt("¿Cuál es la segunda nota?"));
let nota3 = Number(prompt("¿Cuál es la tercera nota?"));

(nota1 + nota2 + nota3) / 3 >= 4 ? alert("apto") : alert("suspenso");
