import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import AuthContext from '../../context/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, connect } from 'react-redux';
import { LoadLocals } from './actions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ReactReduxContext } from 'react-redux'
import * as SecureStore from 'expo-secure-store';


function Home({navigation}) {
    const context = useContext(AuthContext);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(LoadLocals(context.GetToken()));
    },[])

    const userSettings = () => {
        navigation.navigate('Settings');
    }
    const addLocal = () => {
        navigation.navigate('AddLocal')
    }

    const generateRoute = () => {
        navigation.navigate('GenerateRoute')
    }

    const signOut = () => {
        context.Logout();
    }

    
    return ( 
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#94dcf2' }}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 40, marginTop: 50}} >O que deseja?</Text>
            </View>

            <View style={{marginTop: 100}}>
                <View style={{justifyContent: 'center'}} >
                    <TouchableOpacity onPress={() => userSettings()} style={{backgroundColor: 'orange', width: 280, borderRadius: 18, marginBottom: 20}} >
                        <Text style={{color: 'white', padding: 16, textAlign: 'center', fontWeight: '500', fontSize: 22}} >Editar perfil</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => addLocal()} style={{backgroundColor: 'orange', width: 280, borderRadius: 18, marginBottom: 20}} >
                        <Text style={{color: 'white', padding: 16, textAlign: 'center', fontWeight: '500', fontSize: 22}} >Adicionar novo destino</Text>
                    </TouchableOpacity>
                {/* <Button title="Adicionar Local" onPress={() => addLocal()} /> */}
                </View>

                <View>
                    <TouchableOpacity onPress={() => generateRoute()} style={{backgroundColor: 'orange', width: 280, borderRadius: 18, marginBottom: 20}} >
                        <Text style={{color: 'white', padding: 16, textAlign: 'center', fontWeight: '500', fontSize: 22}} >Gerar rota</Text>
                    </TouchableOpacity>
                {/* <Button title="Adicionar Local" onPress={() => addLocal()} /> */}
                </View>
                {/* <Button title="Gerar Rota" onPress={() => generateRoute()} /> */}

                <View style={{marginTop: 100}} >
                    <TouchableOpacity onPress={() => signOut()} style={{backgroundColor: '#FF5100', width: 280, borderRadius: 18}} >
                        <Text style={{color: 'white', padding: 16, textAlign: 'center', fontWeight: 'bold', fontSize: 22}} >SAIR</Text>
                    </TouchableOpacity>
                {/* <Button title="Logout" onPress={() => signOut()} /> */}
                </View>
            </View>
            
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

export default Home;