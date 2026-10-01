const tareas = [{ id: "1", titulo: "Comprar pan" }];
function agregarTarea(lista, titulo) {
// devuelve un array NUEVO con la tarea añadida, sin modificar "lista"
    let nuevaLista = [...lista, {id: lista.length + 1, titulo: titulo}];
    return nuevaLista;
}
const nuevas = agregarTarea(tareas, "Estudiar React Native");
console.log(tareas.length, nuevas.length);
console.log(nuevas[1]);

function borrarTarea(lista, id){
    return lista.filter((t) => t.id !== id);
}


console.log(borrarTarea(nuevas,1));