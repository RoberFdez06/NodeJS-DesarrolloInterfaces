import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {

const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");

const [contactos, setContactos] = useState([]);

const borrar = () => {
    setContactos([...contactos,{nombre, telefono}]);
    setNombre("");
    setTelefono("")
}

const borrarId = (idUsuario) => {
    setContactos(contactos.filter((c) => c.nombre !== idUsuario));
}

const vacio = nombre.trim() === "" || telefono.trim() === "";

    return (
        <View>
            <TextInput placeholder="Nombre: " value={nombre} onChangeText={setNombre}/>
            <TextInput placeholder="Teléfono: " value={telefono} onChangeText={setTelefono}/>
            <Button disabled={vacio} title="Añadir" onPress={borrar}/>
            <Text>Número de contactos: {contactos.length}</Text>
            {contactos.map(contactos => (
                <View key={contactos.nombre}>
                    <Text>{contactos.nombre} - {contactos.telefono}</Text>
                    <Button title="Borrar Contacto" onPress={() => borrarId(contactos.nombre)}/>
                </View>
            ))}
        </View>
    );
}