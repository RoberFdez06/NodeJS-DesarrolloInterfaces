import { useState } from "react";
import { View } from "react-native";
import LibroItem from "./components/LibroItem";

const librosIniciales = [
    { id: "1", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", leido:
    true },
    { id: "2", titulo: "1984", autor: "George Orwell", leido: false },
    { id: "3", titulo: "El Hobbit", autor: "J.R.R. Tolkien", leido: false },
];

export default function EjercicioB4() {
  const [libros, setLibros] = useState(librosIniciales);

  return (
    <View>
      {libros.map((l) => (
        <LibroItem key={l.id} titulo={l.titulo} autor={l.autor} leido={l.leido}/>
      ))}
    </View>
  );
}