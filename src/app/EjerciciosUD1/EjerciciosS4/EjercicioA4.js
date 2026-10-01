/**function saludar() {
console.log("Hola");
return "adiós";
}
const a = saludar;
const b = saludar();
console.log(typeof a, typeof b);
*/
//No se que saldra en la primera, en la segunda creo que pondra hola.

function saludar() {
console.log("Hola");
return "adiós";
}
//En la primera llamada no sale nada.
function alPulsar(callback) {
callback;
}
alPulsar(saludar);
alPulsar(saludar());

/*function alPulsar(callback) {
callback;
}
function borrar(id) {
console.log("Borrando la tarea", id);
}
alPulsar(borrar(3));*/