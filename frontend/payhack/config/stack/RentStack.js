import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FormCash from "../../modules/cash/adapters/screen/form-cash";
import TicketOxxo from "../../modules/cash/adapters/screen/ticket-oxxo";
import Home from "../../modules/cash/adapters/screen/home";
import Login from "../../modules/cash/adapters/screen/login";
const Stack = createNativeStackNavigator();
const RentStack = () => {
    return (
        <Stack.Navigator initialRouteName='login'
                         screenOptions={{
                             headerMode: 'screen',
                             headerTintColor: '#FFF',
                             headerStyle: {backgroundColor: "#1AA07B"}
                         }}>

            <Stack.Screen name='cashStack' component={FormCash} options={{title: 'Verificar'}}/>
            <Stack.Screen name='ticketOxxo' component={TicketOxxo} options={{title: 'Ticket'}}/>
            <Stack.Screen name='home' component={Home} options={{title: 'home'}}/>
            <Stack.Screen name='login' component={Login} options={{title: 'Iniciar sesión'}}/>

        </Stack.Navigator>
    )
}

export default RentStack

const styles = StyleSheet.create({})