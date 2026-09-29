import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Tareas(){

    const tareasIniciales = [
        {id: 1, texto:"hacer los deberes"}, 
        {id: 2, texto:"estudiar"}, 
        {id: 3, texto:"el workbook"}
    ];
    const [tareas, setTareas] = useState(tareasIniciales);
    const [nuevaTarea, setNuevaTarea] = useState("");

    function agregarTarea(){
        setTareas([...tareas, {id: tareas.length + 1, texto: nuevaTarea}]);
        setNuevaTarea("");
    }

    return (
        <View>
            <TextInput placeholder="Introduce tus tareas: " value={nuevaTarea} onChangeText={setNuevaTarea}/>
            <Button title="Guardar Tarea" onPress={agregarTarea}></Button>

            {tareas.map((tarea) => (
                <Text key={tarea.id}>{tarea.texto}</Text>
            ))}

            <Text>{nuevaTarea}</Text>
        </View>
    )
}