import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native'

function SignInScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const login = (username, password) => {
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

  export default SignInScreen;