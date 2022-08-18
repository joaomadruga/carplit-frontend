import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';


import Routes from './src/routes/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'RetniSans-Regular': require('./assets/fonts/RetniSans-Regular.ttf'),
    'RetniSans-BoldItalic': require('./assets/fonts/RetniSans-BoldItalic.ttf'),
    'RetniSans-Italic': require('./assets/fonts/RetniSans-Italic.ttf'),
    'RetniSans-Light': require('./assets/fonts/RetniSans-Light.ttf'),
    'RetniSans-LightItalic': require('./assets/fonts/RetniSans-LightItalic.ttf'),
    'RetniSans-Medium': require('./assets/fonts/RetniSans-Medium.ttf'),
    'RetniSans-MediumItalic': require('./assets/fonts/RetniSans-MediumItalic.ttf'),
    'RetniSans-Bold': require('./assets/fonts/RetniSans-Bold.ttf'),
  });

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
    <>
      <View onLayout={onLayoutRootView}/>
      <Routes/>
    </>
  );
}