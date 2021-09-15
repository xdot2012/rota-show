import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function GenerateRouteScreen({navigation}) {
  const [idPontoInicial, setIdPontoInicial] = useState('');
  const [inicio, setInicio] = useState('');

    const gerarRota = (idPontoInicial) => {
        setIdPontoInicial(idPontoInicial);
        navigation.navigate("ShowRouteScreen")
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2'}}>
        <View style={{marginTop: 50, backgroundColor: 'white', width: 300, borderRadius: 8, marginBottom: 20}} >
          <View style={{flexDirection: 'row'}} >
            <Text style={{color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22}}>Adicionar pontos de parada</Text>
            <Icon name="bus" size={38} style={{padding: 10}} />
          </View>
        </View>

        <TextInput
          placeholder="Inicio"
          value={inicio}
          onChangeText={setInicio}
          textAlign='center'
          style={{marginTop: 50, marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />

        <View>
          <TouchableOpacity onPress={() => gerarRota({idPontoInicial})} 
          style={{backgroundColor: 'white', width: 300, borderRadius: 8, marginTop: 100, backgroundColor: '#f2e194' }} >
            <Text style={{textAlign: 'center', padding: 20, fontWeight: '500', fontSize: 22, color: 'black'}} >GERAR ROTA</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  export default GenerateRouteScreen;