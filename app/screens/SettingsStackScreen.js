import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../components/Settings';

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen
          name="Settings"
          component={Settings}
          options={{ tabBarLabel: 'Settings' }}
        />
      </SettingsStack.Navigator>
    );
  }
  
  export default SettingsStackScreen;