import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './contexts/AuthContext';
import Navigator from './navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts, RedHatDisplay_400Regular, RedHatDisplay_500Medium, RedHatDisplay_600SemiBold, RedHatDisplay_700Bold, RedHatDisplay_800ExtraBold, RedHatDisplay_900Black } from '@expo-google-fonts/red-hat-display';

export default function App() {
  let [fontsLoaded] = useFonts({
    "400": RedHatDisplay_400Regular,
    "500": RedHatDisplay_500Medium,
    "600": RedHatDisplay_600SemiBold,
    "700": RedHatDisplay_700Bold,
    "800": RedHatDisplay_800ExtraBold,
    "900": RedHatDisplay_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <Navigator/>
    </AuthProvider>
  );
}
