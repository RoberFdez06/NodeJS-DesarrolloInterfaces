import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {

    const [likes, setLikes] = useState(0);

    const darMeGusta = () => {
        setLikes(likes + 1);
    };

    const quitarMeGusta = () => {
        setLikes(likes - 1);
    };

    const restart = () => {
        setLikes(0);
    };

    console.log("Likes ahora:", likes);

    return (
        <View style={{ marginTop: 60, padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>{likes} ♥</Text>
            <Button title="Me gusta" onPress={darMeGusta} />
            <Button title="Quitar likes" onPress={quitarMeGusta} />
            <Button title="Reiniciar" onPress={restart} />
        </View>
    );
}