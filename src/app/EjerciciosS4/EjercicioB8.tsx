import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function App() {
    const [texto, setTexto] = useState("");
    const [productos, setProductos] = useState([]);

    function agregar() {
    setProductos([...productos, { id: Date.now().toString(), nombre: texto }]);
    }
    
    return (
        <View style={{ marginTop: 60, padding: 20 }}>
            <TextInput value={texto} onChangeText={setTexto} placeholder="Producto" />
            <Button title="Añadir" onPress={agregar} />
            {productos.map((p) => (
            <Text key={p.id}>{p.nombre}</Text>
            ))}
        </View>
    );
}
//Primer error: Too many re-renders ocurre porque al boton le pasamos la funcion agregar con los () o lo que es lo mismo por referencia. Se arregla quitando los parentesis.
//Segundo error: Se estaba creado sin ... y registraba la posicion anterior de la memoria
//Tercer error: En la lista no esta la propiedad key