import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableHighlight
} from 'react-native';

const Screen_9 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header_text}>
                    Use an Artificial External{'\n'}
                    Defibrillator{'\n'}
                    (AED or “shock machine”)
                </Text>
                <Image style={styles.img} source={require('../assets/images/steps-2-03.png')} />
                <Text style={styles.text1}>
                    This is a machine that analyzes the victim’s{'\n'}
                    rhythm and provide a shock as quickly{'\n'}
                    as possible when needed
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    It is meant for public use only
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    You don’t need to be trained to use it
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    It will tell you what to do
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text2}>Why is a shock needed</Text>
                <Text style={styles.text1}>
                    Cardiac arrest is due to electrical malfunctioning{'\n'}
                    of the heart, usually caused by sudden{'\n'}
                    ventricular fibrillation
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    An AED shocks this abnormal rhythm{'\n'}
                    back to normal

                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    It will only do so if this it is needed
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    So you can’t do any harm by using an AED
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    Ask for an AED
                </Text>
                <Image style={styles.img} source={require('../assets/images/steps-2-03.png')} />
                <Text style={styles.text1}>
                    Apply pads as instructed on BARE skin
                </Text>
                <Image style={styles.img} source={require('../assets/images/steps-2-03.png')} />
                <Text style={styles.text1}>
                    Apply pads as instructed on BARE skin
                </Text>
                <Image style={styles.img2} source={require('../assets/images/aed-sa-moot-01.png')} />
                <Text style={styles.text1}>
                    Try not to interrupt the CPR while you{'\n'}
                    remove or move clothes to bare the{'\n'}
                    chest and apply pads

                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    Do not touch the patient when  device is{'\n'}
                    analyzing heart rhythm
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    When  SHOCK is applied, stay clear
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    Resume chest compression after the{'\n'}
                    shock and follow AFD prompts
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text2}>
                    Till when do you need to continue{'\n'}
                    CPR
                </Text>
                <Text style={styles.text1}>
                    Continue CPR till Patient revives, Opens{'\n'}
                    eyes, Starts breathing

                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    Medical Help arrives
                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
                    }}>
                </View>
                <Text style={styles.text1}>
                    NEVER give anything by mouth: food,{'\n'}
                    water, medicines

                </Text>
                <View
                    style={{
                        borderBottomColor: 'white',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginStart: 25,
                        marginEnd: 25,
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
        marginTop: 20
    },
    img: {
        width: 180,
        height: 250,
        marginStart: 90,
        marginEnd: 20,
        marginTop: 30
    },
    img2: {
        width: 220,
        height: 180,
        marginStart: 80,
        marginEnd: 20,
        marginTop: 30
    },
    text1: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '900',
        color: '#fff',
        marginTop: 30
    },
    text2: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        marginTop: 50,
        fontWeight: '900'
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
});

export default Screen_9;