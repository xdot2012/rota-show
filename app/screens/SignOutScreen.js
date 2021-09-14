import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native'


function SignOutScreen({navigation}) {

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignIn' }],
    });
    navigation.navigate('SignIn');
  } ,[])

  return (
    <View>
      <Text>Loggin Out...</Text>
    </View>
  )
}


  export default SignOutScreen;