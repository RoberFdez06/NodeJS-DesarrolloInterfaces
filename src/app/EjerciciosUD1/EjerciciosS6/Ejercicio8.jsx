import { useState } from "react";
import { View } from "react-native";
import BotonPrimario from "./components/BotonPrimario";
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

    function vaciarLista() {
        setLibros([]);
    }

    return (
        <View style={{ marginTop: 60, padding: 20 }}>
            <CampoTexto
                value={titulo}
                onChangeText={setTitulo}
                placeholder="Título del libro..."
            />
            <BotonPrimario children={"Añadir"} onPress={agregarLibro} color={"#18e23a"}/>
            <BotonPrimario children={"Vaciar Lista"} onPress={vaciarLista} color={"#f50404"}/>
            
            {libros.map((l) => (
                <Card key={l.id}>
                    <LibroItem titulo={l.titulo}/>
                </Card>
            ))}
        </View>
    );
}