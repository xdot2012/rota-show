import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import AuthContext from '../context/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-elements';


function SignInScreen({ navigation }) {
  const context = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (username, password) => {
    console.log('LOGA')
    context.Login(username, password);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2' }}>

      <View style={{ marginTop: 50, backgroundColor: 'white', width: 300, borderRadius: 8, marginBottom: 20 }} >
        <View style={{ flexDirection: 'row' }} >
          <Icon name="bus" size={38} style={{ padding: 10 }} />
          <Text style={{ color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22 }}>Login</Text>
        </View>
      </View>

      <TextInput
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
        textAlign='center'
        style={{ marginTop: 50, marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white' }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        textAlign='center'
        style={{ marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white' }}
      />

      <View>
        <TouchableOpacity onPress={() => login(username, password)}
          style={{ backgroundColor: 'white', width: 300, borderRadius: 8, marginTop: 100, backgroundColor: '#f2e194' }} >
          <Text style={{ textAlign: 'center', padding: 20, fontWeight: '500', fontSize: 22, color: 'black' }} >ENTRAR</Text>
        </TouchableOpacity>
      </View>

      <Button
        buttonStyle={styles.button}
        title="Criar conta"
        type="clear"
        onPress={() => navigation.navigate("CreateAccount")}
      />


    </View>

  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20
  }

});

export default SignInScreen;