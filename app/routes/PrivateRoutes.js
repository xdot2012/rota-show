import React from 'react';
import { Stack } from '../App';

import MainScreen from '../screens/MainScreen';
import AddLocalScreen from '../screens/AddLocalScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GenerateRouteScreen from '../screens/GenerateRouteScreen';
import ShowRouteScreen from '../screens/ShowRouteScreen';
import SignOutScreen from '../screens/SignOutScreen';


const PrivateRoutes = () => {
    return (
        <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={MainScreen} />
            <Stack.Screen name="AddLocal" component={AddLocalScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="GenerateRoute" component={GenerateRouteScreen} />
            <Stack.Screen name="ShowRouteScreen" component={ShowRouteScreen} />
            <Stack.Screen name="SignOut" component={SignOutScreen} />
        </Stack.Navigator>
    )
}

export default PrivateRoutes;
