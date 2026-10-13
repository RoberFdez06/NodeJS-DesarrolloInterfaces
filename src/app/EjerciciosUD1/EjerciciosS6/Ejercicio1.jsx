import { Text, View } from "react-native";
import Card from "./components/Card";

export default function App() {
    return (
        <Card>
            <View>
                <Text>Un solo texto</Text>
                <Text>Un solo texto</Text>
            </View>
        </Card>
    );
}