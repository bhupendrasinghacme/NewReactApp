import React from "react";
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View, TouchableHighlight } from "react-native";
// import Tabs from '../components/Tabs.js';
const TopicList = () => {
    const button_content_data = [
        {
            title: 'How can I be sure that the person who collapsed has had a cardiac arrest?', url_btn: ''
        },
        {
            title: 'What are the 4 basic steps of CPR', url_btn: ''
        },
        {
            title: 'What are the basic Rules of CPR?', url_btn: ''
        },
        {
            title: 'Can only doctors and nurses perform CPR?', url_btn: ''
        },
        {
            title: 'What is Hands-Only CPR?', url_btn: ''
        },
        {
            title: 'Is my doing CPR safe for the victim', url_btn: ''
        },
        {
            title: 'Are you confident that you can now do CPR?', url_btn: ''
        }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                A Brief Recap of what{'\n'}
                you've learnt

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
            {/* <Tabs /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#83D2BF"
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: "center",
        color: 'white',
        marginTop: 15
    },
    button_wrapper: {
        paddingLeft: 10,
        paddingRight: 10,

    },
    button_element: {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
        backgroundColor: '#6C64DE',
        borderRadius: 10,
    },
    button_element_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 12
    },
})

export default TopicList;