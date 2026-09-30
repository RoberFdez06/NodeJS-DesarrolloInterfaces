import { useState } from "react";
import { Button, Text, View } from "react-native";

let contador = 0;

export default function App() {
    const [ contador, setContador ] = useState(0);

function sumar() {
    setContador(contador + 1);
    console.log("El contador ahora vale:", contador);
}

const restar = () => {
    setContador(contador - 1);
    console.log("El contador ahora vale:", contador);
}

const reiniciar = () => {
    setContador(0);
}

return (
    <View style={{ marginTop: 60, padding: 20, alignItems: "center" }}>
    <Text style={{ fontSize: 30 }}>{contador}</Text>
    <Button title="+1" onPress={sumar} />
    <Button title="-1" onPress={restar}/>
    {/* Too many re-renders. React limits the number of renders to prevent an infinite loop. 
    Creo que pasa porque le estamos pasando la funcion por valor en lugar de por referencia */}
    <Button title="Reiniciar" onPress={reiniciar}/>
    </View>
);
}
//El contador en console.log aumenta pero en la página no.
//No cambia porque hay que usar el usestate, ya que las variables normales no avisan al componente que tiene que cargarse de nuevo.