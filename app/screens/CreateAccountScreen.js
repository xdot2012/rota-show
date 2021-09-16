import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import {useDispatch} from 'react-redux';
import { CreateAccount } from '../components/Home/actions';

function CreateAccountScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
  

    const addUser = () => {
      var data = {username: username, password: password, email: email}
      dispatch(CreateAccount(data));
      navigation.navigate('SignIn');
    }

    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="CreateAccount" onPress={() => addUser({ username, email, password })} />
      </View>
    );
  }

  export default CreateAccountScreen;