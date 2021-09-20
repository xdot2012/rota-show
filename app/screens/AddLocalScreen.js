import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert} from 'react-native'
import AuthContext from '../context/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LoadLocals } from '../components/Home/actions';

import { LinearGradient } from 'expo';
import { useDispatch } from 'react-redux';

function AddLocalScreen({navigation}) {
  const [localName, setLocalName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLogitude] = useState('');
  const dispatch = useDispatch()
  const context = useContext(AuthContext);

  
  const clearState = () => {
    setLocalName('');
    setLatitude('');
    setLogitude('');
  };

  const goBack = () => {
    navigation.navigate('Home')
  }

  const addLocal = () => {
    const data = {name: localName, latitude: latitude, longitude: longitude, user_id: context.GetUser().id}
    const response = context.post({'url': '/locals/', 'body': data})  
    dispatch(LoadLocals(context.GetToken()));
    Alert.alert("SUCESSO!", "Ponto Adicionado com sucesso, deseja adicionar outro ponto?",[
      {
        text: "Sim",
        onPress: () => clearState(),
      },
      {
        text: "Sair",
        onPress: () => goBack(),
      },
    ] )
  }

  
    return (
      <View  style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2'}}>

        <View style={{marginTop: 50, backgroundColor: 'white', width: 300, borderRadius: 8, marginBottom: 20}} >
          <View style={{flexDirection: 'row'}} >
            <Text style={{color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22}}>Adicionar Destino</Text>
            <Icon name="bus" size={38} style={{padding: 10}} />
          </View>
        </View>


        <TextInput
          placeholder="Nome do Local"
          value={localName}
          onChangeText={setLocalName}
          textAlign='center'
          style={{marginTop: 50, marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />
        <TextInput
          placeholder="Latitude"
          value={latitude}
          onChangeText={setLatitude}
          textAlign='center'
          style={{marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />
        <TextInput
          placeholder="Longitude"
          value={longitude}
          onChangeText={setLogitude}
          textAlign='center'
          style={{marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />
        <View style={{ marginLeft: 20, marginRight: 20}}>
            <Text>Certifique-se de informar a latitude e longitude corretamente, pois ainda não disponibilizamos uma forma de verificação de dados! A adicão de dados incorretos ocasionará em falhas no momento da geração da rota!</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => addLocal()} 
          style={{backgroundColor: 'white', width: 300, borderRadius: 8, marginTop: 100, backgroundColor: '#f2e194' }} >
            <Text style={{textAlign: 'center', padding: 20, fontWeight: '500', fontSize: 22, color: 'black'}} >ADICIONAR PONTO</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  export default AddLocalScreen;