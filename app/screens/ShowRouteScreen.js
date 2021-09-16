import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux';

function ShowRouteScreen({navigation}) {
  const userRoute = useSelector((state) => state.Home.route)


    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2' }}>
        <View style={{marginTop: 50, backgroundColor: 'white', width: 300, borderRadius: 8, marginBottom: 20}} >
          <View style={{flexDirection: 'row'}} >
            <Text style={{color: '#4e8df2', padding: 20, textAlign: 'center', fontWeight: '500', fontSize: 22}}>Rota</Text>
            <Icon name="bus" size={38} style={{padding: 10, marginLeft: 100}} />
          </View>
        </View>

        <View>
            <Text style={{fontWeight: 'bold'}} >ROTA DO CAPETAO AQUI</Text>
          </View>
      </View>
    );
  }

  export default ShowRouteScreen;