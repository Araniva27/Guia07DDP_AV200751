import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { About } from '../screen/About';

const Stack = createStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name = "about" component={About}
            options = {{title: About}}
        />        
    </Stack.Navigator>
  );
}
