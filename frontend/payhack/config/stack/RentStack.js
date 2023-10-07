import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FormCash from "../../modules/cash/adapters/screen/form-cash";
const Stack = createNativeStackNavigator();
const RentStack = () => {
    return (
        <Stack.Navigator initialRouteName='cashStack'
                         screenOptions={{
                             headerMode: 'screen',
                             headerTintColor: '#FFF',
                             headerStyle: {backgroundColor: "#1AA07B"}
                         }}>

            <Stack.Screen name='cashStack' component={FormCash} options={{title: 'Formulario'}}/>

        </Stack.Navigator>
    )
}

export default RentStack

const styles = StyleSheet.create({})