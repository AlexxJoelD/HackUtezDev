import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cash from "../../modules/cash/adapters/screen/cash";

const Stack = createNativeStackNavigator(); 
const RentStack = () => {
  return (
    <Stack.Navigator initialRouteName='rentStack'
    screenOptions={{
        headerMode: 'screen', 
        headerTintColor: '#FFF',
        headerStyle:{ backgroundColor: "#1AA07B"}
    }}>
        <Stack.Screen name='rentStack'
        component={Cash} options={{title: 'Rent'}}/>
    </Stack.Navigator>
  )
}

export default RentStack

const styles = StyleSheet.create({})