import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';
import Routes from './src/routes/routes';
import { fontsLoadedConfig } from './src/constants/utils/Constants';
import { Portal } from 'react-native-paper';

export default function App() {
  const [fontsLoaded] = useFonts(fontsLoadedConfig);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{flex: 1}}>
      <Portal.Host>
        <View onLayout={onLayoutRootView}/>
        <Routes/>
      </Portal.Host>
    </View>
  );
}