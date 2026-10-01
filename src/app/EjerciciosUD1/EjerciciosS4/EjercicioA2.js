const original = ["a", "b"];
const copia = original;
copia.push("c");
console.log(original.length, original === copia);
//Creo que va a salir 2 y no

const original1 = ["a", "b"];
const nueva = [...original1, "c"];
console.log(original1.length, nueva.length, original1 === nueva);
//La diferencia es que copia = original1 te copia la posición en memoria del primer elemento del array original1 y 
// [...original, "c"] crea un nuevo array con original y añade c. Le sirve mejor la segunda opción