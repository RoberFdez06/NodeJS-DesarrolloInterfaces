import { TextInput } from "react-native";

export default function CampoTexto({ value, onChangeText, placeholder }) {
    return (
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder}/>
    );
}