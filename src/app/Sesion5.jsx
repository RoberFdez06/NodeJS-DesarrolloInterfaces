import { Text, View } from "react-native";

const tareasIniciales = [
    {id: 1, texto: "tarea 1"},
    {id: 2, texto: "tarea 2"},
    {id: 3, texto: "tarea 3"},
]

function Tarea({ t }){
    return(
        <View>
            <Text>{t.texto}</Text>
        </View>
    );
}

export function Tareas({ tareas }){
    //Para luego usarlo en otro archivo lo exportamos y en el archivo que lo queremos usar utilizamos import { Tareas } from "./Sesion5.jsx"
    return (
        <View>
            {tareas.map((e) => (
                <Tarea  key={e.id} tarea={e} />
            ))};
        </View>
    );
}

export default function App(){
    return (
        <View>
            <Text>Estamos en la sesión 5</Text>
            <Tarea texto={tareasIniciales[0].texto}/>
            <Tareas tarea={tareasIniciales}/>
        </View>
    );
}