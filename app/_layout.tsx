import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Balloo2': require("../assets/fonts/Baloo2-Bold.ttf"),
    'Balloo2SemiBold': require("../assets/fonts/Baloo2-SemiBold.ttf"),
    'Balloo2Medium': require("../assets/fonts/Baloo2-Medium.ttf"),
    'Balloo2Regular': require("../assets/fonts/Baloo2-Regular.ttf"),
    'Ballo2Bold': require("../assets/fonts/Baloo2-Bold.ttf"),
    'Balloo2ExtraBold': require("../assets/fonts/Baloo2-ExtraBold.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter_18pt-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter_18pt-Medium.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter_18pt-ExtraBold.ttf"),
    "Inter-Black": require("../assets/fonts/Inter_18pt-Black.ttf"),
    "Inter-Light": require("../assets/fonts/Inter_18pt-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
