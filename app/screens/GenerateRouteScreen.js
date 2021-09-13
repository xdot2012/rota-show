import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native'

function GenerateRouteScreen({navigation}) {
  const [idPontoInicial, setIdPontoInicial] = useState('');

    const gerarRota = (idPontoInicial) => {
        setIdPontoInicial(idPontoInicial);
        navigation.navigate("ShowRouteScreen")
    }

    return (
      <View>
        <Text>TELA COM INPUT DO PONTO INICIAL DA ROTA</Text>
        <Button title="GERAR ROTA" onPress={() => gerarRota({idPontoInicial})} />

      </View>
    );
  }

  export default GenerateRouteScreen;