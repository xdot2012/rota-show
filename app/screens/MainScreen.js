import React, { useEffect, useState, useContext } from 'react'
import { Text, View } from 'react-native'
import Home from '../components/Home';

function MainScreen({navigation}) {

    return (
        <Home navigation={navigation}/>
    );
  }

  
  export default MainScreen;