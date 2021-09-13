import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, connect } from 'react-redux';
import { LoadPages } from './actions';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Home({navigation, pages}) {
    const dispatch = useDispatch()
    const [pagesLoaded, setPagesLoaded] = useState(false);

    useEffect(() => {
        dispatch(LoadPages());
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HOME PAGE</Text>
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