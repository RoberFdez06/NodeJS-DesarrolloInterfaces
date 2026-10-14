import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Biblioteca" }} />
      <Stack.Screen name="ayuda" options={{ title: "Ayuda" }} />
      <Stack.Screen name="libro" options={{ title: "Detalle del libro"}} />
    </Stack>
  );
};