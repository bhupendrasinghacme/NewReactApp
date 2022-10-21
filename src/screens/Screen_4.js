import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableHighlight } from 'react-native';

const Screen_4 = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.header_text}>
                Why do YOU need to HELP
            </Text>
            <Text style={styles.text1}>
                In 3 minutes ambulance or medical help is{'\n'}
                unlikely to arrive
            </Text>
            <Image style={styles.img} source={require('../assets/images/handFinger.png')} />
            <Text style={styles.text2}>
                So if someone has a sudden cardiac arrest,{'\n'}
                who is going to help that person ?

            </Text>

            <TouchableHighlight
                style={styles.button_element}
                onPress={() => {
                    alert('You tapped the button!');
                }}
            >
                <Text style={styles.button_element_text}>CONTINUE</Text>
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83D2BF'
    },
    header_text: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 40
    },
    text1: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 40
    },
    img: {
        width: 300,
        height: 300,
        marginStart: 50,
        marginTop: 70
    },
    text2: {
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
        fontSize: 14,
        fontWeight: '700',
    },
    button_element: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        backgroundColor: '#6C64DE',
        borderRadius: 50,
        width: 140,
        marginBottom: 30,
        position: 'absolute',
        right: 10,
        bottom: 10
    },
    button_element_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 10
    }
})

export default Screen_4;