import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import { CreateAccount } from '../components/Home/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-elements';



function CreateAccountScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();


  const addUser = () => {
    var data = { username: username, password: password, email: email }
    dispatch(CreateAccount(data));
    navigation.navigate('SignIn');
  }

  return (

    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2' }}>

      <View style={{ marginTop: 50, backgroundColor: 'white', width: 300, borderRadius: 8, marginBottom: 20 }} >
        <View style={{ flexDirection: 'row' }} >
          <Text style={{ color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22 }}>Criar Conta</Text>
          <Icon name="bus" size={38} style={{ padding: 10 }} />
        </View>
      </View>

      <TextInput
        placeholder="E-mail"
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
          <Text style={{ textAlign: 'center', padding: 20, fontWeight: '500', fontSize: 22, color: 'black' }} >CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>




    </View>
    // <View>
    //   <TextInput
    //     placeholder="Username"
    //     value={username}
    //     onChangeText={setUsername}
    //   />
    //   <TextInput
    //     placeholder="Email"
    //     value={email}
    //     onChangeText={setEmail}
    //   />
    //   <TextInput
    //     placeholder="Password"
    //     value={password}
    //     onChangeText={setPassword}
    //     secureTextEntry
    //   />
    //   <Button title="CreateAccount" onPress={() => addUser({ username, email, password })} />
    // </View>
  );


}

const styles = StyleSheet.create({
  button: {
    margin: 20
  }

});



export default CreateAccountScreen;