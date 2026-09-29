import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default  function App(){
     const [ contador, setContador ] = useState(0);

    function sumar(){
        setContador(contador + 1);
    }
    function resetear(){
        setContador(0);
    }

    return (
        <View>
            <Text style={styles.estiloContador}>Contador: {contador}</Text>
            <Button title="+ 1" onPress={sumar}></Button>
            <Button title="Reset" onPress={resetear}></Button>
            <TextInput></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
  boton: {
    borderRadius: 20,
    width: 50,
    height: 50,
  },
  estiloContador: {
    fontSize: 40,
    textAlign: "center"
  }
});