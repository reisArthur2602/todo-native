import { StatusBar } from 'react-native';
import Routes from './src/routes';

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from '@expo-google-fonts/inter';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });
  return (
    <>
      {fontsLoaded && <Routes />}
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.base.gray900}
      />
    </>
  );
}
