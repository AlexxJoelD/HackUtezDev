import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Loading from "../../../../kernel/components/Loading";
import {useNavigation} from "@react-navigation/native";
import {Button, Icon, Input, Image} from "@rneui/base";


const Home = ({navigation, route:{params:{user}}}) => {

    const [error, setError] = useState(user)
    const [show, setShow] = useState(false);
    const [data, setData] = useState(user);

    const changePayLoad = (e, type) => {
        setData({...data, [type]: e.nativeEvent.text})
    }


    const create = () => {
        navigation.navigate('services', {user:user})
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
                    }}>Hola {data.name}</Text>

                            <Image
                                source={require('../../../../assets/cashtransfer.png')}
                                resizeMode='contain'
                                style={styles.logo}
                                
                            />


                    <Button
                        title='Siguiente'
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

export default Home

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 159,
        
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