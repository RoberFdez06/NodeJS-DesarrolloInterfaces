import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [listaProductos, setListaProductos] = useState<any[]>([]);
  const [nombreProducto, setNombreProducto] = useState("");

  const vacio = nombreProducto.trim() === "";

  const añadirLista = () => {
    if (vacio) return;

    const nuevoProducto = { 
      id: listaProductos.length + 1,
      nombre: nombreProducto.trim() 
    };

    setListaProductos([...listaProductos, nuevoProducto]);
    setNombreProducto("");
  };

  return (
    <View>
      <Text>Nombre del producto:</Text>
      
      <TextInput value={nombreProducto} onChangeText={setNombreProducto} placeholder="Introduzca el nombre..."/>

      <Pressable style={[styles.boton, vacio && styles.botonDeshabilitado]} onPress={añadirLista} disabled={vacio}>
        <Text style={styles.textoBoton}>Añadir</Text>
      </Pressable>

      <Text>Total: {listaProductos.length} productos</Text>

      {listaProductos.map((producto) => (
        <Text key={producto.id}>
          - {producto.nombre}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  botonDeshabilitado: {
    backgroundColor: "#aaa",
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
  },
});