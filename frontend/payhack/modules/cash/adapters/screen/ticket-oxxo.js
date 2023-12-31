import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import {useNavigation} from "@react-navigation/native";
import {Button, Icon, Input, Image} from "@rneui/base";
import Modal from '../../../../kernel/components/Modal';


const TicketOxxo = ({navigation, route: {params: {ticket, user}}}) => {
    const [error, setError] = useState({})
    const [show, setShow] = useState(false);
    const [data, setData] = useState(ticket);
    const [showModal, setShowModal] = useState(false)
    const [modalText, setModalText] = useState('')
    const [title, setTitle] = useState('')
    const [showCodeB, setShowCodeB] = useState(false);

    const expirationDate = ticket.payment_method.expires_at;
    const {barcode_url} = ticket.payment_method;

    const convertirMarcaDeTiempoAFecha = (timestamp) => {
        const fecha = new Date();
        const fecha2 = new Date(fecha.getTime() + timestamp);

        const año = fecha2.getFullYear();
        const mes = fecha2.getMonth() + 1;
        const dia = fecha2.getDate();
        const hora = fecha2.getHours();
        const minuto = fecha2.getMinutes();
        const segundo = fecha2.getSeconds();

        const fechaFormateada = `${dia}/${mes}/${año} ${hora}:${minuto}`;

        return fechaFormateada;
    }

    const next = () => {
        setTitle('¡Recuerda!');
        setModalText(`Tu fecha límite para realizar tu pago es ${convertirMarcaDeTiempoAFecha(expirationDate)}, si por algún motivo no realizas el pago, esta transacción se cancelará automáticamente.

        Para tu comodidad, te enviaremos un correo electrónico un día antes de la fecha límite.
        
        Ten un excelente día.`);
        setShowModal(true);
    }

    const showCode = () => {
        setShowCodeB(!showCodeB);
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
                            paddingLeft: 40,
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
                                marginVertical: 10
                            }}>${ticket.amount | 0}</Text>
                            <Text style={{
                                fontSize: 15,
                                color: '#58585e',
                                marginHorizontal: 10,
                            }}
                            >Oxxo cobrarará una comisión adicional al realizar el pago.</Text>
                        </View>
                    </View>


                    {
                        !showCodeB && (
                            <View>
                                <Text style={{...styles.label, marginTop: 15, marginBottom:15}}>Número de referencia</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: '#1AA07B',
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#1AA07B',
                                    marginHorizontal: 30
                                }}>{ticket.payment_method.reference}</Text>
                            </View>
                        )
                    }


                    {
                        showCodeB && (
                            <View>
                                <Text style={{...styles.label, marginTop: 15}}>Código de barras</Text>

                                <Image
                                    source={{uri: barcode_url}}
                                    resizeMode='contain'
                                    style={{
                                        marginVertical: 10,
                                        width: '100%',
                                        height: 100,
                                    }}
                                />
                            </View>
                        )
                    }


                    <Text style={{...styles.label, textAlign: 'left', marginLeft: 14, marginTop: 20}}>Instrucciones
                        de pago</Text>

                    <Text style={styles.text}>
                        Acude a la tienda Oxxo más cercana y proporciona al cajero el número de referencia.
                    </Text>

                    <Text style={{...styles.text, fontWeight: 'bold'}}>
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
                        marginVertical: 30,
                        marginHorizontal: 15
                    }}>Al completar los pasos, recibirás en breve un correo electrónico con la orden de pago.</Text>


                    <Button
                        title='Código de barras'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={showCode}
                    />

                    <Button
                        title='Inicio'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={next}
                    />
                </View>
            </View>
            <Modal setShow={setShowModal} show={showModal} text={modalText} title={title} user={user}/>
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
        marginLeft: 15,
        marginVertical: 3
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