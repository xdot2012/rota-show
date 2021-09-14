import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, connect } from 'react-redux';
import { LoadPages } from './actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ReactReduxContext } from 'react-redux'
import * as SecureStore from 'expo-secure-store';

function Home({navigation}) {

    const userSettings = () => {
        navigation.navigate('Settings')
    }

    const addLocal = () => {
        navigation.navigate('AddLocal')
    }

    const generateRoute = () => {
        navigation.navigate('GenerateRoute')
    }

    const signOut = () => {
        navigation.navigate('SignOut');
    }
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Configurações" onPress={() => userSettings()} />
            <Button title="Adicionar Local" onPress={() => addLocal()} />
            <Button title="Gerar Rota" onPress={() => generateRoute()} />
            <Button title="Logout" onPress={() => signOut()} />
        </View>
    )
}


const styles = StyleSheet.create({
    searchButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#90caf9',
        borderRadius:10,
        width:200, 
    },
  })

const mapStateToProps = state => (
    {
        pages: state.Home.pages,
    }
)

export default connect(mapStateToProps)(Home);