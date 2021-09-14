import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native'
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import configureStore from './store';
const { persistor, store } = configureStore();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { enableScreens } from 'react-native-screens'; 

import MainScreen from './screens/MainScreen';
import SignInScreen from './screens/SignInScreen';
import SignOutScreen from './screens/SignOutScreen';

import CreateAccountScreen from './screens/CreateAccountScreen';
import AddLocalScreen from './screens/AddLocalScreen';
import SettingsScreen from './screens/SettingsScreen';
import GenerateRouteScreen from './screens/GenerateRouteScreen';
import ShowRouteScreen from './screens/ShowRouteScreen';
import axios from 'axios';
import { BASE_URL } from './variables';

enableScreens();
const Stack = createNativeStackNavigator();


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
    <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName={'SignIn'}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Home" component={MainScreen}/>
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
            <Stack.Screen name="AddLocal" component={AddLocalScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="GenerateRoute" component={GenerateRouteScreen} />
            <Stack.Screen name="ShowRouteScreen" component={ShowRouteScreen} />
            <Stack.Screen name="SignOut" component={SignOutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: '#90caf9',
  },
})

export default App;
