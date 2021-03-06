import React from 'react';
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