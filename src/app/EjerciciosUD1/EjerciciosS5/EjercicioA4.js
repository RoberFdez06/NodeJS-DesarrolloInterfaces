/**function saludar({nombre}) {
return `Hola ${nombre}`;
}
console.log(saludar({ nombre: "Ana" }));
*/
//TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
//El error estaba a la hora de crear la funcion estaba puesto [] y se hace con {}

const libro = { titulo: "1984", autor: "George Orwell" };
function describir({ titulo, autor }) {
return `${titulo}, de ${autor}`;
}
console.log(describir(libro));
//Es porque esta Titulo con la T mayuscula en la constante, pero en la funcion con t minúscula