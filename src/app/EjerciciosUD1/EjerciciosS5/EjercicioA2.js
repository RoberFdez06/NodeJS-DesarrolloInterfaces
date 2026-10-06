//Bloque 1
const persona = { nombre: "Eva", edad: 22 };
const {nombre, edad} = persona;
console.log(nombre, edad);
//Dara error porque usa [] en vez de {}

//Bloque 2
const numeros = [10, 20];
console.log(numeros[0], numeros[1]);
//No saldra nada porque no puedes desectruturar un array