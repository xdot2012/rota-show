import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

function GenerateRouteScreen({navigation}) {
  const [idPontoInicial, setIdPontoInicial] = useState('');

    const gerarRota = (idPontoInicial) => {
        setIdPontoInicial(idPontoInicial);
        navigation.navigate("ShowRouteScreen")
    }

    return (
      <View>
        <Text>DROPDOWN COM OS PONTOS PRO CARA SELECIONAR O INICIAL</Text>
      <Button title="GERAR ROTA" onPress={() => gerarRota({idPontoInicial})} />

      </View>
    );
  }

  export default GenerateRouteScreen;