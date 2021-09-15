import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native'
import axios from 'axios';
import { BASE_URL } from '../variables';
import AuthContext from '../context/auth';

function AddLocalScreen({navigation}) {
  const [localName, setLocalName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLogitude] = useState('');

  const context = useContext(AuthContext);

  const clearState = () => {
    setLocalName('');
    setLatitude('');
    setLogitude('');
  };

  const goBack = () => {
    navigation.navigate('Home')
  };

  const addLocal = async () => {
    const data = {name: localName, latitude: latitude, longitude: longitude, user_id: context.GetUser()}
    const response = context.AuthPost({'url': '/locals/', 'body': data})
    
    Alert.alert("Sucesso!", "Local Adicionado com Sucesso!",
    [
      {
        text: "Adicionar Novo Local",
        onPress: () => clearState()
      },
      {
        text: "Voltar",
        onPress: () => goBack(),
      },
    ] )
  }
    return (
      <View  style={{ flex: 1, alignItems: 'center', marginTop: 50, }}>

        <View>
          <TouchableOpacity style={{backgroundColor: 'white', width: 300, borderRadius: 18, marginBottom: 20}} >
            <Text style={{color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '400', fontSize: 22}}>Adicionar Destino</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Nome do Local"
          value={localName}
          onChangeText={setLocalName}
        />
        <TextInput
          placeholder="Latitude"
          value={latitude}
          onChangeText={setLatitude}
        />
        <TextInput
          placeholder="Longitude"
          value={longitude}
          onChangeText={setLogitude}
        />
        <Button title="Adicionar Ponto" onPress={() => addLocal()} />
      </View>
    );
  }

  export default AddLocalScreen;