import { useState } from "react";
import { TextInput, View, Text } from "react-native";

export default function App(){
    const [nombre, setNombre] = useState("");

    return (
        <View>
            <TextInput placeholder="Escribe algo maquinon: " value={nombre} onChangeText={setNombre}/>
            <Text>Has escrito: {nombre}</Text>
        </View>
    )
}