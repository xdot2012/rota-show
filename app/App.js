import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import configureStore from './store';
const { persistor, store } = configureStore();
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './screens/HomeStackScreen';
import SettingsStackScreen from './screens/SettingsStackScreen';

const Tab = createBottomTabNavigator();

function App() {
  const [fonstLoaded, setFontsLoaded] = useState(false)

  _loadAssets = () => {
    Font.loadAsync({
      'lato-bold-extra': require('./assets/fonts/Lato-Black.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      'lato-bold-italic': require('./assets/fonts/Lato-BoldItalic.ttf')
    })
    // setFontsLoaded(true)
  }

  useEffect(() => {
    _loadAssets()
  } ,[])
  

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused 
              ? 'cog-outline'
              : 'cog-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#90caf9',
          inactiveTintColor: 'gray',
        }}
      >
          <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarLabel: 'Home' }}/>
          <Tab.Screen name="Settings" component={SettingsStackScreen} options={{ tabBarLabel: 'Settings' }} />
        </Tab.Navigator>
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
