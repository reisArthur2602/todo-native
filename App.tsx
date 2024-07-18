import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });
  return (
    <>
      {fontsLoaded && <Routes />}
      <StatusBar style="light" translucent />
    </>
  );
}
