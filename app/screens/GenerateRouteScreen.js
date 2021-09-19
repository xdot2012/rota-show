import React, { useEffect, useState, useContext} from 'react';
import { StyleSheet, FlatList, Text, View, Button, TouchableOpacity, TextInput, List, Auto} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import AuthContext from '../context/auth';
import { GenerateRoute } from '../components/Home/actions';
import { ScrollView } from 'react-native-gesture-handler';

function GenerateRouteScreen({navigation}) {
  const [idPontoInicial, setIdPontoInicial] = useState('');
  const [viewLocals, setViewsLocals] = useState(false);
  const [pointName, setPointName] = useState('');
  const locals = useSelector((state) => state.Home.locals)
  const context = useContext(AuthContext);
  const dispatch = useDispatch(); 
  

    const teste = () => {
      
      console.log(idPontoInicial)
    }

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
            <Text style={{color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22}}>Gerar Rota</Text>
            <Icon name="bus" size={38} style={{padding: 10}} />
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => setViewsLocals(!viewLocals)} style={{width: 300, backgroundColor: '#f2e194', borderRadius: 8}} >
            <Text style={{textAlign: 'center', padding: 18, fontWeight: '500', fontSize: 18}}>VER LOCAIS CADASTRADOS</Text>
            <Icon style={{alignSelf: 'center', marginTop: -15}} name="chevron-down" size={42} />
          </TouchableOpacity>
        </View>

        {viewLocals == true && (
          <>
            <Text style={{padding: 10, fontSize: 18}} >SELECIONE O PONTO DE PARTIDA!</Text>
          </>
        )}
        {viewLocals == true && (
          <FlatList 
            data={locals}
            keyExtractor={item => item.pk}
            renderItem={({item}) => (
              <>
                
                  <View>
                    <TouchableOpacity onPress={() => {teste(); setIdPontoInicial(item.pk); setPointName(item.name)}} style={{width: 300, backgroundColor: '#c999c2', marginTop: 10, borderRadius: 8}} >
                      <Text style={{padding: 10, textAlign: 'center', color: 'black', fontSize: 15, fontWeight: '500'}} >{item.name}</Text>
                    </TouchableOpacity>
                  </View>
              </>
            )}
          />
        )}

        <View style={{flexDirection: 'row'}} >
          <Text style={{ fontSize: 15, fontWeight: '500' ,alignSelf: 'flex-start', marginTop: 50, marginBottom: -40, marginLeft: 50}} >INICIANDO ROTA EM:
            <View>
              <Text style={{fontWeight: '500', fontSize: 16, marginLeft: 15}} >{pointName}</Text>
            </View>
          </Text>
        </View>


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