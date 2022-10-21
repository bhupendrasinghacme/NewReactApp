import React from 'react';
import {
    View, Text,
    Image,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableHighlight
} from 'react-native';

const Screen_6 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header_text}>Recognise cardiac arrest</Text>
                <Text style={styles.text1}>
                    If you find a collapsed person
                </Text>
                <Image style={styles.img} source={require('../assets/images/Untitled-1.png')} />
                <Text style={styles.text2}>
                    Ensure Scene safety: Check for any hazards{'\n'}
                    like fire, electrical wires, gas,{'\n'}
                    broken glass or traffic
                </Text>
                <Text style={styles.text2}>
                    Gently but firmly tap the shoulders, chest and{'\n'}
                    check and ask  “Hello?! Can you hear me?!”{'\n'}
                    Are you OK?”
                </Text>
                <Image style={styles.img2} source={require('../assets/images/Untitled-22.png')} />
                <Text style={styles.text2}>
                    If there was no response to your voice,{'\n'}
                    check pulse
                </Text>
                <View style={styles.img_wrapper}>
                    <Image style={{ width: 160, height: 80, marginLeft: 10 }} source={require('../assets/images/PILS-01.png')} />
                    <Image style={{ width: 140, height: 80, marginLeft: 30 }} source={require('../assets/images/check-01.png')} />
                </View>
                <Text style={styles.text2}>
                    Check breathing by keeping your palm{'\n'}
                    on nostril/ abdomen
                </Text>
                <View style={styles.img_wrapper}>
                    <Image style={{ width: 150, height: 120, marginLeft: 20 }} source={require('../assets/images/breath-01.png')} />
                    <Image style={{ width: 150, height: 120, marginLeft: 30 }} source={require('../assets/images/image-13.png')} />
                </View>
                <Text style={styles.text2}>
                    If there is no response, no pulse, no breathing{'\n'}
                    then it means the person has{'\n'}
                    had a cardiac arrest
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
                <Text style={styles.text2}>
                    Person will be dead if YOU don’t help him
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
                <Text style={styles.text2}>
                    Do not give ANYTHING by mouth: Water, food,{'\n'}
                    medicines
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
            </ScrollView>
        </SafeAreaView>
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
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 60
    },
    text1: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 20

    },
    img: {
        width: 290,
        height: 46,
        marginStart: 30,
        marginEnd: 20,
        marginTop: 70
    },
    text2: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 30
    },
    img2: {
        width: 320,
        height: 160,
        marginStart: 20,
        marginEnd: 20,
        marginTop: 50
    },
    img_wrapper: {
        flexDirection: "row",
        marginTop: 50,
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
        marginLeft: 190

    },
    button_element_text: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 10
    },
});

export default Screen_6;