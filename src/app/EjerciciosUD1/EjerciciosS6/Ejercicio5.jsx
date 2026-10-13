import { Text } from "react-native";
import Card from "./components/Card";
import LibroItem from "./components/LibroItem";
export default function App() {
    return (
        <Card>
            <LibroItem titulo="Drácula" />
            <Text style={{ color: "#888", fontSize: 12 }}>Terror clásico</Text>
        </Card>
    );
}