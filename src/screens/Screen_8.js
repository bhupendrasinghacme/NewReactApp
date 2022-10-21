import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

const Screen_8 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>
                Be aware of The Good{'\n'}
                Samaritan Law
            </Text>
            <Text style={styles.text1}>
                Passed by the Government of India in 2016
            </Text>
            <Image style={styles.img} source={require('../assets/images/satyamave-01.png')} />
            <Text style={styles.text2}>Ministry of Road Transport and Highways</Text>
            <Text style={styles.text3}>
                Good Samaritan Law protects you from any legal{'\n'}
                harassment on actions taken by to save the life{'\n'}
                of a person injured in an accident, or crash,{'\n'}
                or emergency medical condition
            </Text>
            <Text style={styles.text3}>
                So if you help a cardiac arrest victim, the Country{'\n'}
                and the Law are with YOU!!

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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83D2BF'
    },
    header_text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 20
    },
    text1: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: '900'
    },
    img: {
        width: 130,
        height: 260,
        marginLeft: 116,
        marginTop: 20
    },
    text2: {
        textAlign: 'center',
        fontWeight: '900',
        color: '#515100',
    },
    text3: {
        textAlign: 'center',
        color: '#fff',
        marginTop: 30,
        fontSize: 12
    },
    button_element: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 40,
        backgroundColor: '#6C64DE',
        borderRadius: 50,
        width: 140,
        marginBottom: 30,
        marginLeft: 195

    },
    button_element_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 10
    },

})

export default Screen_8;