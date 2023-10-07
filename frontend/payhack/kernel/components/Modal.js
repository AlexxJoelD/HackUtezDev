import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Overlay, Text } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

export default function Modal(props) {
    const { show, setShow, title, text, user} = props
    const navigation = useNavigation()
    return (
        <Overlay
            isVisible={show}
            overlayBackgroundColor='transparent'
            overlayStyle={styles.overlay}
            animationType='fade'
            onBackdropPress={() => {
                navigation.navigate('home', {user})
                setShow(false)
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#000',
                        marginBottom: 20
                    }}>{title}</Text>
                    <Text style={styles.info}>{text}</Text>
                </View>
            </View>
        </Overlay>
    )
}

const icon = (type) => {
    let iconName
    let color
    switch (type) {
        case 'error':
            iconName = 'close-circle-outline'
            color = 'tomato'
            break;
        case 'success':
            iconName = 'check-bold'
            color = 'green'
            break
        default:
            iconName = 'help'
            color = 'grey'
            break;
    }
    return (<Icon type='material-community'
        name={iconName}
        size={85}
        color={color}></Icon>)
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
    },
    overlay: {
        minHeight: 'auto',
        maxHeight: 350,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    info: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    },
})