import { useState } from "react";
import { Button, Text, View } from "react-native";

let contador = 0;

export default function App() {
    const [ contador, setContador ] = useState(0);

function sumar() {
    if (contador < 10) {
        setContador(contador + 1);
        console.log("El contador ahora vale:", contador);
    }
}

const restar = () => {
    if (contador > 0) {
        setContador(contador - 1);
        console.log("El contador ahora vale:", contador);
    }
}

const reiniciar = () => {
    setContador(0);
}

return (
    <View style={{ marginTop: 60, padding: 20, alignItems: "center" }}>
    <Text style={{ fontSize: 30 }}>{contador}</Text>
    <Button title="+1" onPress={sumar} disabled={contador >= 10} />
    <Button title="-1" onPress={restar} disabled={contador <= 0} />
    <Button title="Reiniciar" onPress={reiniciar}/>
    </View>
);
}
