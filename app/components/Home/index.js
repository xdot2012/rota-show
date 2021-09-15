import React, { useContext, useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import AuthContext from '../../context/auth';

function Home({navigation}) {
    const context = useContext(AuthContext);

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
        context.Logout();
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

export default Home;