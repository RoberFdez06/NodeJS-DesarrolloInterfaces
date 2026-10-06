import { Image, StyleSheet, Text, View } from "react-native";

export default function Ejercicio5B() {
  return (
    <View style={styles.fondoTarjeta}>
      <Image source={{ uri: "https://i.pravatar.cc/150?img=5" }} style={styles.foto}/>
      <View>
        <Text style={styles.texto}>Laura Pérez</Text>
        <Text style={styles.texto}>Profesora</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    fondoTarjeta: {
        backgroundColor: "lightblue",
        borderRadius: 30,
        marginVertical: 100,
        marginHorizontal: 500,
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
    },
    foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  texto: {
    color: "white",
    fontSize: 20,
  },
});