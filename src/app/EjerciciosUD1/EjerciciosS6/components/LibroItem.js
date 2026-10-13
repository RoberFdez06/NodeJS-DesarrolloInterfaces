import { StyleSheet, Text } from "react-native";

export default function LibroItem({ titulo }) {
    return <Text style={styles.libro}>{titulo}</Text>;
}

const styles = StyleSheet.create({
    libro: { fontSize: 16 },
});