import { StyleSheet, TextInput } from "react-native";

export default function CampoTexto({ value, onChangeText, placeholder }) {
    return (
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input}/>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10,
        marginBottom: 10
    },
});