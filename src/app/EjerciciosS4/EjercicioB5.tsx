import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App(){

    const [nombre, setNombre] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [texto, setTexto] = useState("")

    return (
        <View>
            <TextInput placeholder="Escribe aquí tu nombre: " onChangeText={(text) => setNombre(text)} value={nombre}></TextInput>
            <TextInput placeholder="Escribe aquí tu ciudad: " onChangeText={(text) => setCiudad(text)} value={ciudad}></TextInput>
            <Button title="Saludar" onPress={() => setTexto("Hola " + nombre + ", bienvenido/a a " + ciudad)}/>            
            <Text>{texto}</Text>
        </View>
    )
}