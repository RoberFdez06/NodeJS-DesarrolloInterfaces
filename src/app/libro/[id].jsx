import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetalleLibro() {

    const { id, titulo, autor } = useLocalSearchParams();

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Título: {titulo}</Text>
            <Text>Autor: {autor}</Text>
            <Text style={styles.id}>Identificador: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  contenedor: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  id: { color: "#666" },
});