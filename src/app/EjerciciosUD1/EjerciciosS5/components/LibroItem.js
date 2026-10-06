import { StyleSheet, Text, View } from "react-native";

export default function LibroItem ({ titulo, autor, leido }) {
    return(
        <View>
            <Text style={leido && Styles.tituloLeido}>
                {titulo}
            </Text>
            <Text>
                {autor}
            </Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    tituloLeido: {
        textDecorationLine: "line-through",
        color: "gray"
    }
});