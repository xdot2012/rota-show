import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'

import Home from '../components/Home';
import FindPage from '../components/FindPage';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: 'Home' }}
        />
        <HomeStack.Screen
          name="FindPage"
          component={FindPage}
          options={{ tabBarLabel: 'FindPage' }}
        />
      </HomeStack.Navigator>
    );
  }
  
  export default HomeStackScreen;