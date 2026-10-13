import { ScrollView, StyleSheet, Text } from "react-native";


export default function MisModulos() {
  return (
    <ScrollView>
      <Text style={styles.estiloModulos}>Desarrollo de Interfaces</Text>
      <Text style={styles.estiloModulos}>Programacion de Servicios y Procesos</Text>
      <Text style={styles.estiloModulos}>Programación Multimedia y Dispositivos Móviles</Text>
      <Text style={styles.estiloModulos}>Acceso a Datos</Text>
      <Text style={styles.estiloModulos}>Desarrollo Asistido por IA</Text>
      <Text style={styles.estiloModulos}>Sistemas de Gestión Empresarial</Text>
      <Text style={styles.estiloModulos}>Ingles</Text>
      <Text style={styles.estiloModulos}>Proyecto</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    estiloModulos: {
        backgroundColor: "gray",
        margin: 10,
        padding: 10,
        marginRight: 1500,
        borderRadius: 10,
        alignSelf: "center",
      },
});