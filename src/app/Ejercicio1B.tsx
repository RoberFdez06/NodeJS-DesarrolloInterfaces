import { View, Text } from "react-native";
export default function App() {
return (
<View>
    <Text>Hola</Text>
</View>
);
}
//El error es Unexpected text node: Hola. A text node cannot be a child of a <View>.
//Creo que el error se debe a que el texto "Hola" no está envuelto en un componente de texto 
// todo el contenido de texto debe estar dentro de un componente <Text>.