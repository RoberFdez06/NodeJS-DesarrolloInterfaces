import { useState } from "react";
import { TextInput, View } from "react-native";

const [texto, setTexto] = useState("");

export default function App(){
    return (
        <View>
            <TextInput placeholder="Buscando..." value={texto} onChangeText={setTexto}/>
            <TextInput placeholder="Caracteres: "/>
        </View>
    );
};