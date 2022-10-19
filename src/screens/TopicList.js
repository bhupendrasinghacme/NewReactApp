import React from "react";
import { Image, PixelRatio, ScrollView, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Tabs from '../components/Tabs.js';
const TopicList = () => {
    const button_content_data = [
        { title: 'What is CPR ?', url_btn: '' },
        { title: 'What is Sudden Cardiac Arrest', url_btn: '' },
        { title: 'Heart attack vs Cardiac arrest ?', url_btn: '' },
        { title: 'Why is it important for Indians to learn CPR ?', url_btn: '' },
        { title: 'Why is Time of essence ?', url_btn: '' },
        { title: 'Why do YOU need to HELP ? ', url_btn: '' },
        { title: 'What is the Good Samaritan Law ?', url_btn: '' },
        { title: 'What are the 4 basic steps of CPR ?', url_btn: '' }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>What Will Be Learn</Text>
            <View style={styles.button_wrapper}>
                {
                    button_content_data.map((item, index) => (
                        <TouchableHighlight
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
        flex: 2,
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