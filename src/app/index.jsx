import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const librosIniciales = [
  { id: "1", titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { id: "2", titulo: "1984", autor: "George Orwell" },
  { id: "3", titulo: "El Hobbit", autor: "J.R.R. Tolkien" },
];

export default function Inicio() {
  const [libros] = useState(librosIniciales);
  return (
    <View style={styles.pantalla}>

    <Link href="/ayuda" style={{ color: "#2563EB", padding: 8 }}>
      Acerca de
    </Link>

      {libros.map((l) => (
        <View key={l.id} style={styles.fila}>
          <Text style={styles.titulo}>{l.titulo}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  pantalla: { padding: 20 },
  fila: { padding: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
  titulo: { fontSize: 16 },
});