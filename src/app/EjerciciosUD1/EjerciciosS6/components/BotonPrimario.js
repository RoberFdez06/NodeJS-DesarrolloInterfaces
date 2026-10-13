import { Pressable, StyleSheet, Text } from "react-native";

export default function BotonPrimario({ children, onPress, color = "#4f46e5" }) {
    return (
        <Pressable style={[styles.boton, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.texto}>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    boton: {
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginVertical: 6,
    },
    texto: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
    },
});