import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';


const Screen_2 = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.header_text}>
                Why is it important for{'\n'}
                Indians to learn CPR
            </Text>

            <Text style={styles.text1}>
                Every year in India nearly 2 million people{'\n'}
                diedue to out-of-hospital{'\n'}
                sudden cardiac  arrest
            </Text>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    marginTop: 20,
                    marginStart: 30,
                    marginEnd: 30,
                }}>
            </View>
            <Text style={styles.text1}>
                Less than 1% such victims survive due to{'\n'}
                minimal public awareness  on how to{'\n'}
                handle such emergencies

            </Text>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    marginTop: 20,
                    marginStart: 30,
                    marginEnd: 30,
                }}>
            </View>
            <Text style={styles.text1}>
                Immediate CPR can double or triple chances{'\n'}
                of survival after cardiac arrest


            </Text>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    marginTop: 20,
                    marginStart: 30,
                    marginEnd: 30,
                }}>
            </View>
            <Text style={styles.text1}>
                If you know CPR you may be able to save a{'\n'}
                life one day!!
            </Text>
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    marginTop: 20,
                    marginStart: 30,
                    marginEnd: 30,
                }}>
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
        backgroundColor: '#83D2BF'
    },
    header_text: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15
    },
    text1: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center',
        paddingStart: 10,
        paddingEnd: 10,
        marginTop: 60
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
});


export default Screen_2;