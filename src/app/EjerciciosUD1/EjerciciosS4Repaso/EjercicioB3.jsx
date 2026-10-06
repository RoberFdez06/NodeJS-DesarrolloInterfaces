import { useState } from "react";
import { Button, Text, View } from "react-native";


export default function App(){

    const [volumen, setVolumen] = useState(5);

    const subirVolumen = () => {
        setVolumen(volumen + 1);
    };

    const bajarVolumen = () => {
        setVolumen(volumen - 1);
    };

    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold"}}>{volumen}</Text>
            <Button disabled={volumen >= 10} title="+" onPress={subirVolumen}/>
            <Button disabled={volumen <= 0} title="-" onPress={bajarVolumen}/>
        </View>
    );
}
