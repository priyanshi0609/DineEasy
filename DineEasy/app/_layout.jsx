import { Stack } from "expo-router";
import "../global.css"; // Import global styles 

export default function RootLayout() {
  return (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index" />
    <Stack.Screen name="(tabs)" />
    </Stack>
    );
}
