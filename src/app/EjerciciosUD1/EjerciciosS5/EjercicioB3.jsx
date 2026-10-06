import React, { useState } from "react";
import { View } from "react-native";
import LibroItem from "./components/LibroItem";

const librosIniciales = [
  { id: "1", titulo: "Cien años de soledad" },
  { id: "2", titulo: "1984" },
  { id: "3", titulo: "El Hobbit" },
];

export default function EjercicioB3() {
  const [libros, setLibros] = useState(librosIniciales);

  return (
    <View>
      {libros.map((l) => (
        <LibroItem key={l.id} titulo={l.titulo} />
      ))}
    </View>
  );
}