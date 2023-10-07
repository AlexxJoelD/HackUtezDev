import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import {useNavigation} from "@react-navigation/native";
import {Button, Icon, Input, Image} from "@rneui/base";


const TicketOxxo = ({navigation,  route:{params:{ticket}}}) => {

    console.log('TicketOxxo -> ticket', JSON.stringify(ticket));

    const [error, setError] = useState({})
    const [show, setShow] = useState(false);
    const [data, setData] = useState(ticket);

    const changePayLoad = (e, type) => {
        setData({...data, [type]: e.nativeEvent.text})
    }


    const create = () => {
        console.log('Code ->' + JSON.stringify(data));
    }

    const next = () => {
        // navigation.navigate('home')
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
                    }}
                    >Ficha Digital</Text>


                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 23,
                    }}>
                        <View style={{
                            flex: 1,
                            paddingLeft: 50,
                        }}>
                            <Image
                                source={require('../../../../assets/otsa.jpg')}
                                resizeMode='center'
                                style={styles.logo}
                            />
                        </View>

                        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{
                                fontSize: 29,
                                fontWeight: 'bold'
                            }}
                            >Monto a pagar</Text>
                            <Text style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: '#1AA07B',
                            }}>${ticket.amount | 0}</Text>
                            <Text style={{
                                fontSize: 15,
                                color: '#58585e',
                                marginHorizontal: 10,
                            }}
                            >Oxxo cobrarará una comisión adicional al realizar el pago.</Text>
                        </View>
                    </View>


                    <Text style={{...styles.label, marginTop:15}}>Número de referencia</Text>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#1AA07B',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#1AA07B',
                        marginHorizontal: 30
                    }}>35265-72575-323552</Text>

                    <Text style={{...styles.label, textAlign: 'left', marginLeft: 14, marginTop:20}}>Instrucciones
                        de pago</Text>

                    <Text style={styles.text}>
                        Acude a la tienda Oxxo más cercana y proporciona al cajero el número de referencia.
                    </Text>

                    <Text style={{...styles.text, fontWeight:'bold'}}>
                        Conserva tu comprobante de pago.
                    </Text>


                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#1AA07B',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#1AA07B',
                        marginVertical:30,
                        marginHorizontal: 15
                    }}>Al completar los pasos, recibirás en breve un correo electrónico con la orden de pago.</Text>


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

export default TicketOxxo

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 100
    },
    text: {
        fontSize: 21,
        marginLeft:15,
        marginVertical:3
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
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,

    },

})