import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import {useNavigation} from "@react-navigation/native";
import {Button, Icon, Input, Image} from "@rneui/base";
import {MockupData} from "../../../../kernel/mockup";


const Login = ({navigation}) => {


    const payLoad = {
        name: '',
        lastName: '',
        motherLastName: '',
        email: '',
        phone: '',
    }

    const [error, setError] = useState(payLoad)
    const [show, setShow] = useState(false);
    const [data, setData] = useState(payLoad);

    const changePayLoad = (e, type) => {
        setData({...data, [type]: e.nativeEvent.text})
    }


    const create = () => {
        const user =MockupData[Math.floor(Math.random() *( MockupData.length -1 ))]
       navigation.navigate('home',{
           user: user
       })
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
                    }}>Iniciar Sesión</Text>
                      <Image
                                source={require('../../../../assets/userAccount.png')}
                                resizeMode='center'
                                style={styles.logo}
                            />

                    <Button
                        title='Entrar'
                        containerStyle={styles.btnContainer}
                        buttonStyle={styles.btn}
                        onPress={create}
                    />
                </View>
            </View>
            <Loading show={false} text='Registrando'/>

        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 159,
        marginTop: 0,
        marginBottom: 10
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