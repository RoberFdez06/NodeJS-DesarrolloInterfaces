const persona = ["Marta", 28, "Sevilla"];
const [nombre, edad, ciudad] = persona;


let resultado = nombre + " tiene " + edad + " años y vive en " + ciudad
console.log(resultado);

function sumaYProducto(a, b) {
    return [a + b, a * b];
}

const [r1,r2,r3] = sumaYProducto(5,10);
console.log(r1,r2);

//Si sigue funcionando

const [nombre2, edad2] = persona;
console.log(nombre2,edad2)
