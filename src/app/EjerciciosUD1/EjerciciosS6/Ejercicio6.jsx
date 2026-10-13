import { useState } from "react";
import { View } from "react-native";
import Card from "./components/Card";
import LibroItem from "./components/LibroItem";


const librosIniciales = [
    { id: "1", titulo: "Drácula" },
    { id: "2", titulo: "Frankenstein" },
];


export default function App() {
    const [libros] = useState(librosIniciales);
    return (
        <View>
            <Card>Portada</Card>
            {libros.map((l) => (
                <Card key={l.id}>
                    <LibroItem titulo={l.titulo} />
                </Card>
            ))}
        </View>
    );
}
//El map no tiene key
//Card no acepta children ni lo muestra
//El card de portada no va así.