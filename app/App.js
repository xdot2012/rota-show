import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import * as Font from 'expo-font';
import { Provider } from 'react-redux';

import configureStore from './store';
const { persistor, store } = configureStore();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { enableScreens } from 'react-native-screens'; 

import MainScreen from './screens/MainScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import AddLocalScreen from './screens/AddLocalScreen';
import SettingsScreen from './screens/SettingsScreen';
import GenerateRouteScreen from './screens/GenerateRouteScreen';
import ShowRouteScreen from './screens/ShowRouteScreen';

enableScreens();
const Stack = createNativeStackNavigator();
const AuthContext = React.createContext();


function SignOutScreen({navigation}) {
  const { signOut } = React.useContext(AuthContext);

  useEffect(() => {
    signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
    navigation.navigate('SignIn');
  } ,[])

  return (
    <View>
      <Text>Loggin Out...</Text>
    </View>
  )
}

function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  const login = (username, password) => {
    signIn({ username, password });
    navigation.navigate('Home');
  }
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => login(username, password)} />
      <Button title="Create Account" onPress={() => navigation.navigate("CreateAccount")} />
    </View>
  );
}

function App({ navigation }) {
  const [fonstLoaded, setFontsLoaded] = useState(false)
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  _loadAssets = () => {
    Font.loadAsync({
      'lato-bold-extra': require('./assets/fonts/Lato-Black.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      'lato-bold-italic': require('./assets/fonts/Lato-BoldItalic.ttf')
    })
    // setFontsLoaded(true)
  }

  const bootstrapAsync = async () => {
    let userToken;

    try {
      userToken = await SecureStore.getItemAsync('userToken');
    } catch (e) {
      // Restoring token failed
    }

    // After restoring token, we may need to validate it in production apps

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    dispatch({ type: 'RESTORE_TOKEN', token: userToken });
  };

  useEffect(() => {
    _loadAssets()
    bootstrapAsync();
  } ,[])
  
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext} >
        <NavigationContainer>
        <Stack.Navigator initialRouteName={state.userToken == null ? 'SignIn' : 'Home'}>
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
    </AuthContext.Provider>
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
