import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetalleAutor() {

    const { autor } = useLocalSearchParams();

    return (
        <View>
            <Text style={styles.estiloAutor}>{autor}</Text>
            <Text>Ficha del autor: ...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    estiloAutor: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
});