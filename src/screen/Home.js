import React from 'react'
import {View, Text, Button} from 'react-native'

export const Home = (props) => {
    const{navigation} = props;
  return (
    <View>
        <Text>Estamos en Home</Text>
        <Button title = 'Ir a about' onPress={() =>navigation.navigate('about')}></Button>
    </View>
  )
}
