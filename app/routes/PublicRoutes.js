import React from 'react';

import MainScreen from '../screens/MainScreen';
import AddLocalScreen from '../screens/AddLocalScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GenerateRouteScreen from '../screens/GenerateRouteScreen';
import ShowRouteScreen from '../screens/ShowRouteScreen';
import SignOutScreen from '../screens/SignOutScreen';


import SignInScreen from '../screens/SignInScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import { Stack } from '../App';

const PublicRoutes = () => {
    return (
        <Stack.Navigator initialRouteName={'SignIn'}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        </Stack.Navigator>
    )
}

export default PublicRoutes;