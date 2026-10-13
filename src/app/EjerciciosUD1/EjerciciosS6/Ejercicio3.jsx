import { useState } from "react";
import { Button, View } from "react-native";
import CampoTexto from "./components/CampoTexto";


export default function App() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [puntuacion, setPuntuacion] = useState("");

    const [libros, setLibros] = useState("");

    const añadirLibro = ({titulo, autor, puntuacion}) => {
        setLibros([...libros, {titulo, autor, puntuacion}]);
        setTitulo("");
        setAutor("");
        setPuntuacion("");
    }

    return (
        <View>
            <CampoTexto value={titulo} onChangeText={setTitulo} placeholder={"Introduce tu titulo: "} />
            <CampoTexto value={autor} onChangeText={setAutor} placeholder={"Introduce tu autor: "} />
            <CampoTexto value={puntuacion} onChangeText={setPuntuacion} placeholder={"Introduce tu puntuacion: "} />
            <Button title="Añadir" onPress={() => añadirLibro(titulo, autor, puntuacion)}/>
        </View>
    );
}