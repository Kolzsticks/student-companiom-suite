import { Stack } from "expo-router";
import "./globals.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
