import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import RentStack from '../stack/RentStack'


const Tab = createBottomTabNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName='cash'
        screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route,color),
            tabBarActiveTintColor: '#1AA07B',
            tabBarInactiveTintColor: '#1AA07B',
            headerShown: false,
        })}>


        <Tab.Screen name='cash' component={RentStack} options={{title:'cash'}}/>

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const screenOptions = (route,color)=>{
    let iconName; 
    switch (route.name) {
        case 'profile':
            iconName = 'account-outline'            
            break;
        case 'cash':
            iconName = 'account-cash-outline'
            break;
        default:
            iconName = 'account'
            break;
    }
    return(
        <Icon type='material-community'
            name={iconName} size={22} color={color}>
        </Icon>
    )
}