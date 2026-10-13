import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: { backgroundColor: "#ffffff", borderRadius: 10, padding: 14, marginBottom: 10 },
});