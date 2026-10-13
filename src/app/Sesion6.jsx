import { useState } from "react";
import { Text, TextInput, View } from "react-native";


function CampoTexto({placeholder, value, onChangeText}){
    return(<TextInput placeholder={placeholder} value={value} onChangeText={onChangeText}/>)
}

export default function App(){
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");

    return(
        <View>
            <Text>Formulario de contacto</Text>
            <CampoTexto value={nombre} onChangeText={setNombre} placeholder="Escribe el nombre: "/>
            <CampoTexto value={apellidos} onChangeText={setApellidos} placeholder="Escribe el apellido: "/>

            <Text>{nombre}</Text>
        </View>
    );
};