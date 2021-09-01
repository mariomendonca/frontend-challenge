import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts
} from '@expo-google-fonts/dm-sans'

import Routes from './src/routes/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  )
}
