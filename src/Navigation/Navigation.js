import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screen/Home'
import { About } from '../screen/About'
import { Contact } from '../screen/Contact'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from './HomeStack'
import { AboutStack } from './AboutStack'
import { ContactStack } from './ContactStack'

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="home" component={HomeStack} options = {{title:'Home'}}/>
        <Tab.Screen name="about" component={AboutStack} options = {{title:'About'}}/>
        <Tab.Screen name="contact" component={ContactStack} options = {{title:'Contact'}}/>
    </Tab.Navigator>
  )
}
