import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export default function App(){

    const [texto, setTexto] = useState("");
    const borrar = () => {
        setTexto("");
    };
    
    return (
        <View>
            <TextInput placeholder="Escribe aquí..." value={texto} onChangeText = {setTexto}></TextInput>
            <Text>Estas escribiendo: {texto}</Text>
            <Text>Caracteres: {texto.length}</Text>
            <Button title="Borrar" onPress={borrar}></Button>
        </View>
    )
}