import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import { Button, Icon, Input } from "@rneui/base";


const MethodPay = ({navigation, route}) => {
    const pricePayload = route.params;
    const {user} = route.params;

    const [show, setShow] = useState(false);
    const [data, setData] = useState(false);

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
                    }}>Metodo de pago</Text>

                    <Button
                        title='Tarjeta'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                    />

                    <Button
                        title='Paypal'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                    />

                    <Button
                        title='Tienda Física'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={() => {
                            navigation.navigate("formCash", {
                                pricePayload,
                                user: user,
                            });
                        }}/>
                </View>
            </View>
            <Loading show={false} text='Registrando' />

        </KeyboardAwareScrollView>
    )
}

export default MethodPay

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