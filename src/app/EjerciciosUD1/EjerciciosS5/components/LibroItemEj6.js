// components/LibroItemEj6.js
import { Text, StyleSheet } from "react-native";
export default function LibroItem([titulo]) {
    return 
    <Text style={styles.libro}>
        {titulo}
    </Text>;
}
const styles = StyleSheet.create({
    libro: { padding: 8, borderBottomWidth: 1, borderBottomColor: "#eee" },
});