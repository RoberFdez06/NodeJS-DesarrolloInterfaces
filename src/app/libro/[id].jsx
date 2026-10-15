import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetalleLibro() {

    const { id, titulo, autor, leido } = useLocalSearchParams();
    const esLeido = leido === "true";

    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Título: {titulo}</Text>
            <Text>Autor: {autor}</Text>
            <Text style={styles.id}>Identificador: {id}</Text>
            <Text>Leido: {esLeido ? "Sí" : "No"}</Text>
        </View>
    );
};
//No salia bien porque al pasar un booleano por parametros pasamos el texto no el booleano entonces tenemos que convertirlo en booleano
const styles = StyleSheet.create({
  contenedor: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  id: { color: "#666" },
});