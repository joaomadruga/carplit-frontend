import { StatusBar } from 'expo-status-bar';
import { Dimensions, PixelRatio, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import Routes from './src/routes/routes';
import { fontsLoadedConfig } from './src/constants/utils/Constants';
import { Portal } from 'react-native-paper';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const window = Dimensions.get("window");

export default function App() {
  const [fontsLoaded] = useFonts(fontsLoadedConfig);
  const [dimensions, setDimensions] = useState({ window });
  const webStyle = {flex: 1, paddingRight: '20%', paddingLeft: '20%'};
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window }) => {
        setDimensions({ window });
      }
    );
    return () => subscription?.remove();
  }, []);
  
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
    <GestureHandlerRootView style={Platform.OS === 'web' && dimensions.window.width > 1280 ? webStyle : {flex: 1}}>
      <Portal.Host>
        <SafeAreaProvider>
          <View onLayout={onLayoutRootView}/>
          <Routes/>
        </SafeAreaProvider>
      </Portal.Host>
    </GestureHandlerRootView>
  );
}
