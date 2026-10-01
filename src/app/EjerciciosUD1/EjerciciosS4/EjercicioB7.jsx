import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

const productosOriginal = [
  { id: 1, nombre: "manzana" },
  { id: 2, nombre: "filetes" },
];

export default function App() {
  const [productos, setNuevosProductos] = useState(productosOriginal);
  const [nombre, setNombre] = useState("");
  const vacio = nombre.trim() === "";

  const agregarProducto = () => {
    setNuevosProductos([
      ...productos,
      { id: productos.length + 1, nombre: nombre },
    ]);
    setNombre("");
  };

  const borrarProducto = (idBorrar) => {
    setNuevosProductos(
      productos.filter((producto) => producto.id !== idBorrar),
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Escribe un producto nuevo"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button disabled={vacio} title="Agregar" onPress={agregarProducto} />
      {productos.map((producto) => (
        <View key={producto.id}>
          <Text>{producto.nombre}</Text>
          <Pressable onPress={() => borrarProducto(producto.id)}>
            <Text>Borrar</Text>
          </Pressable>
        </View>
      ))}
      <Text>Total {productos.length} productos</Text>
    </View>
  );
}