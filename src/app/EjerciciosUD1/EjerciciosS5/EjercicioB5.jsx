import { View } from "react-native";
import LibroItem from "./components/LibroItem";

const libros = [
{ id: "1", titulo: "Drácula" },
{ id: "2", titulo: "Frankenstein" },
];

export default function App() {
    return (
        <View>
            <LibroItem nombre="Drácula" />
            {libros.map((l) => (
            <LibroItem titulo={l.titulo} />
            ))}
        </View>
    );
}