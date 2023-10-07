import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import axios from "../../../../kernel/http-client.gateway";
import { Button, Icon, Input } from "@rneui/base";


const FormCash = ({ navigation, route: { params: { user, pricePayload } } }) => {
    const lineItems = []

    const objetosT = Object.keys(pricePayload.pricesPayload).map((key) => {
        return {
            name: key,
            unit_price: pricePayload.pricesPayload[key],
            quantity: 1
        }
    })
    const payLoad = {
        name: '',
        lastName: '',
        motherLastName: '',
        email: '',
        phone: '',
    }

    const [error, setError] = useState({})
    const [show, setShow] = useState(false);
    const [data, setData] = useState(user);

    const changePayLoad = (e, type) => {
        setData({ ...data, [type]: e.nativeEvent.text })
    }


    const create = async () => {
        setShow(true);
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 1);
        const expirationDateAux = Math.floor(currentDate / 1000);
        const expirationDate = expirationDateAux.toString();

        const requesPayload = {
            line_items: objetosT,
            currency: "MXN",
            customer_info: {
                name: `${data.name} ${data.lastName} ${data.motherLastName}`,
                email: data.email,
                phone: data.phone
            },
            metadata: {
                datos_extra: "1234"
            },
            charges: [{
                payment_method: {
                    type: "cash",
                    expires_at: expirationDate
                }
            }]
        }
        try {
            const response = await axios.doPost('/orders', JSON.stringify(requesPayload));
            setShow(false);
            navigation.navigate('ticketOxxo', { ticket: await response.data.charges.data[0], user})
        } catch (error) {
            console.log(error);
            setShow(false);
        }
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
                            <Icon type='material-community' name='pencil' size={22} />
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
                            <Icon type='material-community' name='pencil' size={22} />
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
                            <Icon type='material-community' name='pencil' size={22} />
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
                            <Icon type='material-community' name='email' size={22} />
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
                        keyboardType='number-pad'
                        rightIcon={
                            <Icon type='material-community' name='phone' size={22} />
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
                </View>
            </View>
            <Loading show={show} text='Registrando' />

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