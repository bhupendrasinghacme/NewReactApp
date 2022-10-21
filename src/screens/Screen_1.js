import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const Screen_1 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>
                Heart attack {'\n'}
                vs{'\n'}
                Sudden Cardiac arrest
            </Text>
            <Text style={styles.text1}>
                Blood flow problem{'\n'}
                The person is usually conscious
            </Text>
            <View style={styles.img_wrapper1}>
                <Image style={{ width: 230, height: 130 }} source={require('../assets/images/dil_mai_laga_tear.png')} />
                <Text style={styles.text2}>Dead muscle</Text>
            </View>
            <Text style={styles.text3}>
                Electrical problem {'\n'}
                The person is usually unconscious
            </Text>
            <View style={styles.img_wrapper2}>
                <Image style={{ width: 100, height: 140 }} source={require('../assets/images/heart-01.png')} />
            </View>
            <TouchableHighlight
                style={styles.button_element}
                onPress={() => {
                    alert('You tapped the button!');
                }}
            >
                <Text style={styles.button_element_text}>CONTINUE</Text>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#83D2BF"
    },
    header_text: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15
    },
    text1: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15
    },
    img_wrapper1: {
        flexDirection: "row",
        padding: 20
    },
    text2: {
        color: '#fff',
        marginTop: 100,
        marginStart: 10
    },
    text3: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 20

    },
    img_wrapper2: {
        flexDirection: "row",
        padding: 18
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
    },
})

export default Screen_1;