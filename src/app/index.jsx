import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const librosIniciales = [
  { id: "1", titulo: "Cien años de soledad", autor: "Gabriel García Márquez", leido: true },
  { id: "2", titulo: "1984", autor: "George Orwell", leido: false },
  { id: "3", titulo: "El Hobbit", autor: "J.R.R. Tolkien", leido: false },
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
          <Pressable onPress={() => router.push({
            pathname: "/libro/[id]",
            params: { id: l.id, titulo: l.titulo, autor: l.autor }
          })}>
            <Text style={styles.titulo}>{l.titulo}</Text>

          </Pressable>
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