import React from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

const Screen_5 = () => {
    const button_content_data = [
        {
            title: 'Recognise cardiac arrest', url_btn: ''
        },
        {
            title: 'Start CPR and ask someone to call \n an ambulance', url_btn: ''
        },
        {
            title: 'Ask for an AED (or shock machine) if present', url_btn: ''
        },
        {
            title: 'Shift to hospital', url_btn: ''
        },

    ]

    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>
                Basic steps of CPR
            </Text>
            <View style={styles.button_wrapper}>
                {
                    button_content_data.map((item, index) => (
                        <TouchableHighlight key={index}
                            style={styles.button_element}
                            onPress={() => {
                                alert('You tapped the button!');
                            }}
                        >
                            <Text style={styles.button_element_text}>{item.title}</Text>
                        </TouchableHighlight>
                    ))
                }
            </View>
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
        marginTop: 60
    },
    button_wrapper: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },
    button_element: {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        backgroundColor: '#6C64DE',
        borderRadius: 30,
    },
    button_element_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
        padding: 10
    },
});
export default Screen_5;