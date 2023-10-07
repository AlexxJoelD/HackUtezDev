import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import axios from "../../../../kernel/http-client.gateway";
import {Button, Icon, Input} from "@rneui/base";


const FormCash = ({navigation, route: {params: {user}}}) => {


    const [error, setError] = useState({})
    const [show, setShow] = useState(false);
    const [data, setData] = useState(user);
    const [ticket, setTicket] = useState('')

    const changePayLoad = (e, type) => {
        setData({...data, [type]: e.nativeEvent.text})
    }


    const create = () => {
        console.log('Code ->' + JSON.stringify(data));
    }


    const next = async () => {

        try {
            const data = await axios.doPost('/orders',

                {
                    "line_items": [{
                        "name": "Tacos",
                        "unit_price": 1000,
                        "quantity": 1
                    }],
                    "shipping_lines": [{
                        "amount": 1500,
                        "carrier": "FEDEX"
                    }], //shipping_lines - physical goods only
                    "currency": "MXN",
                    "customer_info": {
                        "name": "Fulanito Pérez",
                        "email": "i20213tn003@utez.edu.mx",
                        "phone": "+5218181818181"
                    },
                    "shipping_contact": {
                        "address": {
                            "street1": "Calle 123, int 2",
                            "postal_code": "06100",
                            "country": "MX"
                        }
                    }, //shipping_contact - required only for physical goods
                    "charges": [{
                        "payment_method": {
                            "type": "spei"
                        }
                    }]
                }
            )




            navigation.navigate('ticketOxxo', {ticket: data.data})


        } catch (e) {
            console.log(e)
        }


        // navigation.navigate('ticketOxxo')
    }


    return (
        <KeyboardAwareScrollView>
            <View style={styles.viewForm}>
                <View style={styles.container}>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#1AA07B',
                        marginVertical: 15
                    }}>Verifica tus datos</Text>


                    <Text style={styles.label}>Nombre(s)
                    </Text>
                    <Input
                        placeholder='Nombre(s)'
                        rightIcon={
                            <Icon type='material-community' name='pencil' size={22}/>
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayLoad(e, 'name')}
                        errorMessage={error.name}
                        autoCapitalize='none'
                        value={data.name}
                    />

                    <Text style={styles.label}>Apellido paterno
                    </Text>
                    <Input
                        placeholder='Apellido Paterno'
                        rightIcon={
                            <Icon type='material-community' name='pencil' size={22}/>
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayLoad(e, 'lastName')}
                        errorMessage={error.lastName}
                        autoCapitalize='none'
                        value={data.lastName}
                    />

                    <Text style={styles.label}>Apellido materno
                    </Text>
                    <Input
                        placeholder='Apellido Materno'
                        rightIcon={
                            <Icon type='material-community' name='pencil' size={22}/>
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayLoad(e, 'motherLastName')}
                        errorMessage={error.motherLastName}
                        autoCapitalize='none'
                        value={data.motherLastName}
                    />

                    <Text style={styles.label}>Correo electrónico
                    </Text>
                    <Input
                        placeholder='example@gmail.com'
                        rightIcon={
                            <Icon type='material-community' name='email' size={22}/>
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayLoad(e, 'email')}
                        errorMessage={error.email}
                        autoCapitalize='none'
                        value={data.email}
                    />

                    <Text style={styles.label}>Teléfono</Text>
                    <Input
                        placeholder='Teléfono'
                        keyboardType='email-address'
                        rightIcon={
                            <Icon type='material-community' name='phone' size={22}/>
                        }
                        containerStyle={styles.input}
                        onChange={(e) => changePayLoad(e, 'phone')}
                        errorMessage={error.phone}
                        autoCapitalize='none'
                        value={data.phone}
                    />


                    <Button
                        title='Generar código'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={create}
                    />

                    <Button
                        title='Siguiente'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={next}
                    />
                </View>
            </View>
            <Loading show={false} text='Registrando'/>

        </KeyboardAwareScrollView>
    )
}

export default FormCash

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 159,
        marginTop: 100
    },
    viewForm: {
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'center',
        marginTop: 20
    },
    input: {
        width: '100%',
        marginVertical: 10
    },
    btnContainer: {
        marginBottom: 20,
        width: '95%'
    },
    btn: {
        backgroundColor: '#1AA07B',
        marginLeft: 18,
    },
    screen: {
        backgroundColor: 'white'
    },
    label: {
        color: '#1AA07B',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20,

    }
})