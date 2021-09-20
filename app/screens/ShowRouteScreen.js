import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux';

function ShowRouteScreen({navigation}) {
  const [km, setKm] = useState()
  const userRoute = useSelector((state) => state.Home.route)

    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2' }}>
        <View style={{marginTop: 50, backgroundColor: 'white', width: 300, borderRadius: 8, marginBottom: 20}} >
          <View style={{flexDirection: 'row'}} >
            <Text style={{color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22}}>Rota</Text>
            <Icon name="bus" size={38} style={{padding: 10, marginLeft: 100}} />
          </View>
        </View>

        <Text style={{fontSize: 20, fontWeight: '500', color: "blue", textDecorationLine: 'underline', marginBottom: 50}} >Rota Gerada com Sucesso!</Text>
        
        <Text style={{fontWeight: '500', fontSize: 16}} >INICIO ROTA:</Text>
        <FlatList 
          data={userRoute}
          keyExtractor={item => item.pk}
          renderItem={({item}) => (
            <>
              <View style={{}} >
                  <Icon name="chevron-down" size={36} style={{alignSelf: 'center'}} />
                  <Text style={{padding: 10, textAlign: 'center', color: 'black', fontSize: 18, fontWeight: '500'}} >{item.name} - {item.distance} KM</Text>          
                  
              </View>
            </>
          )}
        />

      </View>
    );
  }

  export default ShowRouteScreen;