import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import {useNavigation} from "@react-navigation/native";
import {Button, Icon, Input} from "@rneui/base";


const FormCash = () => {

    const {navigation} = useNavigation()

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
        console.log('Code ->' + JSON.stringify(data));
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
                    }}>Formulario</Text>


                    <Text style={styles.label}>Nombre(s)
                        <Text style={{
                            color: 'red',
                        }}>
                            *
                        </Text>
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
                    />

                    <Text style={styles.label}>Apellido paterno
                        <Text style={{
                            color: 'red',
                        }}>
                            *
                        </Text>
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
                    />

                    <Text style={styles.label}>Apellido materno
                        <Text style={{
                            color: 'red',
                        }}>
                            *
                        </Text>
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
                    />

                    <Text style={styles.label}>Correo electrónico
                        <Text style={{
                            color: 'red',
                        }}>
                            *
                        </Text>
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
                    />

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
                    />



                    <Button
                        title='Generar código'
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