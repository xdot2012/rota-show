import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AuthContext from '../context/auth';

function SettingsScreen({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const context = useContext(AuthContext);

  useEffect(() => {
    setNome(context.GetUser().username);
    setEmail(context.GetUser().email);
  }, [])

  const atualizarPerfil = () => {
    const data = { username: nome, email: email }
    context.put({'url': `/accounts/users/${context.GetUser().id}/`, data})
    context.Logout();
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2'}}>
        <View style={{marginTop: 50, backgroundColor: 'white', width: 300, borderRadius: 8, marginBottom: 20}} >
          <View style={{flexDirection: 'row'}} >
            <Text style={{color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22}}>Editar Perfil</Text>
            <Icon name="bus" size={38} style={{padding: 10, marginLeft: 50}} />
          </View>
        </View>

        <TextInput
          placeholder="Nome Completo"
          value={nome}
          onChangeText={setNome}
          textAlign='center'
          style={{marginTop: 50, marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          textAlign='center'
          style={{marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />
        {/* 
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          textAlign='center'
          style={{marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />
        */}
        <View>
          <TouchableOpacity onPress={() => atualizarPerfil()} 
          style={{backgroundColor: 'white', width: 300, borderRadius: 8, marginTop: 100, backgroundColor: '#f2e194' }} >
            <Text style={{textAlign: 'center', padding: 20, fontWeight: '500', fontSize: 22, color: 'black'}} >ATUALIZAR PERFIL</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  export default SettingsScreen;