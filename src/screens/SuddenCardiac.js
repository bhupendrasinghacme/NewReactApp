import React from "react";
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View, TouchableHighlight } from "react-native";

const SuddenCardiac = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>What is Sudden Cardiac Arrest?</Text>
            <Text style={styles.text1}>It is a malfunctioning of the electrical system of the
                heart caused by sudden ventricular fibrillation
            </Text>
            <Text style={styles.text1}>Normal beating of Heart</Text>
            <View style={styles.img_wrapper}>
                <Image style={{ width: 100, height: 150 }} source={require('../assets/images/heart-01.png')} />
                <Image style={{ width: 200, height: 20, marginTop: 80, fill: '#fff' }} source={require('../assets/images/highwave-01.png')} />
            </View>
            <Text style={styles.text2}>Sudden Cardiac Arrest/ventricular fibrillation</Text>
            <View style={styles.img_wrapper2}>
                <Image style={{ width: 100, height: 150 }} source={require('../assets/images/heart-01.png')} />
                <Image style={{ width: 200, height: 20, marginTop: 80, fill: '#fff' }} source={require('../assets/images/highwave-01.png')} />
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
        backgroundColor: "#83D2BF",
        padding: 15
    },
    header_text: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center'
    },
    text1: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        textAlign: "center",
        marginTop: 20
    },
    img_wrapper: {
        flex: 3,
        flexDirection: "row",
        marginTop: 25
    },
    img_wrapper2: {
        flex: 3,
        flexDirection: "row",
        // marginTop: 15
    },
    text2: {
        marginBottom: 50,
        color: '#fff'
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

export default SuddenCardiac;