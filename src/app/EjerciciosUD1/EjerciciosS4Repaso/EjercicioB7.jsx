import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

const listadoCancionesOriginal = [
    {id: 1, nombre: "Cancion 1", favorito: false},
    {id: 2, nombre: "Cancion 2", favorito: false},
    {id: 3, nombre: "Cancion 3", favorito: false}
];
let contador = listadoCancionesOriginal.length + 1;

export default function App(){

    const agregarCancion = () => {
        setListadoCanciones([...listadoCanciones, {id: contador++, nombre: cancion, favorito: false}]);
        setCancion("");
    };

    const [cancion, setCancion] = useState ("");
    const [listadoCanciones, setListadoCanciones] = useState(listadoCancionesOriginal);

    const vacio = cancion.trim() === "";

    const borrarCancion = (idBorrar) => {
        setListadoCanciones(listadoCanciones.filter(cancion => cancion.id !== idBorrar));
    }

    const alternarFavorito = (idFavorito) => {
        setListadoCanciones(listadoCanciones.map(cancion => {
            if(cancion.id === idFavorito){
                return {...cancion, favorito: !cancion.favorito};
            }else {
                return cancion;
            }
        }))
    }

    return (
        <View>
            <TextInput placeholder="Escribe una canción: " onChangeText={setCancion} value={cancion}/>
            <Button disabled={vacio} title="Agregar" onPress={agregarCancion}/>
            <Text>Total de cnciones: {listadoCanciones.length}</Text>
            {listadoCanciones.map(c => (
                <View key={c.id}>
                    <Text>{c.nombre}</Text>
                    <Pressable onPress={() => alternarFavorito(c.id)}>
                        <Text>{c.favorito ? "★" : "☆"}</Text>
                    </Pressable>
                    <Pressable onPress={() => borrarCancion(c.id)}>
                        <Text>Borrar</Text>
                    </Pressable>
                </View>
            ))}
        </View>
    );    
};