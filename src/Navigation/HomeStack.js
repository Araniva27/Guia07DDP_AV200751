import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screen/Home'

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name = "home" component={Home}
            options = {{title: Home}}
        />        
    </Stack.Navigator>
  );
}
