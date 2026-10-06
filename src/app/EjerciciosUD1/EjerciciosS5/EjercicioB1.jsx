import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View>
            <Text style={s1.libro}>Cien años de soledad</Text>
            <Text style={s2.libro}>1984</Text>
            <Text style={s3.libro}>El Hobbit</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    libro: { padding: 8, borderBottomWidth: 1, borderBottomColor: "#eee" },
});

const s1 = StyleSheet.create({
    libro: { padding: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
});

const s2 = StyleSheet.create({
    libro: { padding: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
});

const s3 = StyleSheet.create({
    libro: { padding: 14, borderBottomWidth: 1, borderBottomColor: "#eee" },
});
//Si