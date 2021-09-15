import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native'
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import configureStore from './store';
const { persistor, store } = configureStore();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { enableScreens } from 'react-native-screens'; 
import Navigator from './routes/Navigator';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './context/auth';

enableScreens();
export const Stack = createNativeStackNavigator();


function App() {
  const [fonstLoaded, setFontsLoaded] = useState(false);

  _loadAssets = () => {
    Font.loadAsync({
      'lato-bold-extra': require('./assets/fonts/Lato-Black.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      'lato-bold-italic': require('./assets/fonts/Lato-BoldItalic.ttf')
    })
    setFontsLoaded(true)
  }

  useEffect(() => {
    _loadAssets()
  } ,[])

  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AuthProvider>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: '#90caf9',
  },
})

export default App;
