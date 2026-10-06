import { View } from "react-native";
import LibroItem from "./components/LibroItem.js";

export default function App() {
  return (
    <View>
      <LibroItem titulo="Cien años de soledad" />
      <LibroItem titulo="1984" />
      <LibroItem titulo="El Hobbit" />
    </View>
  );
}