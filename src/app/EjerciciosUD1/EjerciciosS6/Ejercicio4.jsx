import { useState } from "react";
import { Button, View } from "react-native";
import CampoTexto from "./components/CampoTexto";
import Card from "./components/Card";
import LibroItem from "./components/LibroItem";


export default function App() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [puntuacion, setPuntuacion] = useState("");

    const [libros, setLibros] = useState([]);

    const añadirLibro = ({titulo}) => {
        setLibros([...libros, {titulo}]);
        setTitulo("");
        setAutor("");
        setPuntuacion("");
    }

    return (
        <View>
            <CampoTexto value={titulo} onChangeText={setTitulo} placeholder={"Introduce tu titulo: "} />
            <Button title="Añadir" onPress={() => añadirLibro({titulo})} />

            {libros.map((l, i) => (
                <Card key={i}>
                    <LibroItem titulo={l.titulo}/>
                </Card>
            ))}
        </View>
    );
};