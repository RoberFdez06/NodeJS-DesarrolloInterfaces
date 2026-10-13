import { useState } from "react";
import { Button, View } from "react-native";
import CampoTexto from "./components/CampoTexto";
import Card from "./components/Card";
import LibroItem from "./components/LibroItem";

export default function App() {

    const [titulo, setTitulo] = useState("");

    const [libros, setLibros] = useState([
        { id: "1", titulo: "Cien años de soledad" },
        { id: "2", titulo: "1984" },
    ]);

    function agregarLibro() {
        setLibros([...libros, { id: Date.now().toString(), titulo }]);
        setTitulo("");
    }

    return (
        <View style={{ marginTop: 60, padding: 20 }}>
            <CampoTexto
                value={titulo}
                onChangeText={setTitulo}
                placeholder="Título del libro..."
            />
            <Button title="Añadir" onPress={agregarLibro} />
            
            {libros.map((l) => (
                <Card key={l.id}>
                    <LibroItem titulo={l.titulo}/>
                </Card>
            ))}
        </View>
    );
}