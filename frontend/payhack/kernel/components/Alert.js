import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, Overlay, Text } from '@rneui/base'

export default function Alert(props) {
    const { show, setShow, text, type } = props
    return (
        <Overlay
            isVisible={show}
            overlayBackgroundColor='transparent'
            overlayStyle={styles.overlay}
            animationType='fade'
            onBackdropPress={() => setShow(false)}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.iconContainer}>
                        {icon(type)}
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    overlay: {
        height: 300,
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
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    info: {
        marginBottom: 15,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20
    },
})