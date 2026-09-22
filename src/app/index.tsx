import { Image, StyleSheet, Text, View } from "react-native";

const contacto = {
nombre: "Laura Pérez",
telefono: "600 123 456",
email: "laura@correo.com",
ciudad: "Sevilla",
};

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.pravatar.cc/150?img=5" }}
        style={styles.foto} />
      <Text style={styles.estiloNombre}>{contacto.nombre}</Text>
      <Text style={styles.estiloTelefono}>{contacto.telefono}</Text>
      <Text style={styles.estiloEmail}>{contacto.email}</Text>
      <Text style={styles.estiloCiudad}>{contacto.ciudad}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderRadius: 30,
    marginHorizontal: 750,
    marginVertical: 10,
  },
  estiloNombre: {
    color: "white",
    fontSize: 40,
  },
  estiloTelefono: {
    color: "white",
    fontSize: 20,
  },
  estiloEmail: {
    color: "white",
    fontSize: 20,
  },
  estiloCiudad: {
    color: "white",
    fontSize: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  }
});
