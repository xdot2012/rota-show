import React, { useEffect, useState, useContext} from 'react';
import { StyleSheet, FlatList, Text, View, Button, TouchableOpacity, TextInput, List} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import AuthContext from '../context/auth';
import { GenerateRoute } from '../components/Home/actions';

function GenerateRouteScreen({navigation}) {
  const [idPontoInicial, setIdPontoInicial] = useState('');
  const locals = useSelector((state) => state.Home.locals)
  const context = useContext(AuthContext);
  const dispatch = useDispatch(); 

    const gerarRota = () => {
        dispatch(GenerateRoute(context.GetToken(), { initial_point_pk: idPontoInicial }));
        navigation.navigate("ShowRouteScreen")
    }

    const deleteLocal = (localId) => {
      Alert.alert("Atençaõ!", "Tem certeza que deseja deletar este local?",
      [
        {
          text: "Confirmar",
          onPress: () => {
            context.del({'url': `/api/locals/${localId}/`})
          }
        },
        {
          text: "Cancelar",
          onPress: () => navigation.navigate("Settings"),
        },
      ] )
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
          value={idPontoInicial}
          onChangeText={setIdPontoInicial}
          textAlign='center'
          style={{marginTop: 50, marginBottom: 20, borderRadius: 8, width: 300, height: 40, borderWidth: 1, borderColor: "#C1C1C1", backgroundColor: 'white'}}
        />

        <View>
          <TouchableOpacity onPress={() => gerarRota()} 
          style={{backgroundColor: 'white', width: 300, borderRadius: 8, marginTop: 100, backgroundColor: '#f2e194' }} >
            <Text style={{textAlign: 'center', padding: 20, fontWeight: '500', fontSize: 22, color: 'black'}} >GERAR ROTA</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  export default GenerateRouteScreen;