import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import { block } from 'react-native-reanimated';

const Screen_10 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header_text}>
                    Give CPR
                </Text>
                <Text style={styles.text1}>
                    Lay the person on his/her back, on a firm/flat{'\n'}
                    surface or floor
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
                    Remove anything from behind their head{'\n'}
                    gently, don’t roll the head over

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
                    Start CPR/chest compressions
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
                    Alert someone to call ambulance
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
                    Call for an AED machine, if it is available
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
                    Effective CPR: The power to{'\n'}
                    save is in your hands!!
                </Text>
                <Text style={styles.text1}>
                    Put one hand flat in the centre of the person’s{'\n'}
                    chest, between the nipples{'\n'}{'\n'}

                    Put the other hand on TopicList
                    Lock your{'\n'}
                    fingers together
                </Text>
                <View style={styles.img2_wrapper}>
                    <Image style={styles.img} source={require('../assets/images/steps-2-04.png')} />
                </View>

                <View style={styles.image_wrapper}>
                    <Image style={styles.img2} source={require('../assets/images/steps-2-05.png')} />
                    <Image style={styles.img3} source={require('../assets/images/steps-2-06.png')} />
                </View>
                <View style={styles.image_wrapper}>
                    <Image style={styles.img2} source={require('../assets/images/steps-2-07.png')} />
                    <Image style={styles.img3} source={require('../assets/images/steps-2-08.png')} />
                </View>
                <Text style={styles.text2}>Body position during CPR</Text>
                <Text style={styles.text1}>
                    Lean over the Chest, push straight down.{'\n'}
                    DON’T bend the elbows
                </Text>
                <View style={styles.img4_wrapper}>
                    <Image style={styles.img} source={require('../assets/images/mot-02.png')} />
                </View>
                <Text style={styles.text1}>
                    Hand position during CPR
                    Fingers interlocked
                </Text>
                <View style={styles.img4_wrapper}>
                    <Image style={styles.img} source={require('../assets/images/mot-01.png')} />
                </View>
                <Text style={styles.text1}>
                    Start CPR 100-120/min{'\n'}
                    Go down at least 5 cm or 2 inches{'\n'}
                    Be sure to let the chest rise between compressions
                </Text>
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
    text1: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '900',
        color: '#fff',
        marginTop: 30
    },
    text2: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '900',
        marginTop: 50
    },
    img: {
        width: "100%",
        height: "100%",
        // marginStart: 40,
        // marginEnd: 20,
        // marginTop: 20
    },
    image_wrapper: {
        flexDirection: 'row',
        width: 160,
        height: 160,
        marginTop: 1
        // margin: 20,
        // paddingHorizontal: 8,
        // paddingVertical: 6,
    },
    img2: {
        width: '100%',
        height: '100%',
        marginStart: 20
    },
    img3: {
        width: '100%',
        height: '100%',
        marginStart: 1
    },
    img2_wrapper: {
        width: 300,
        height: 180,
        marginTop: 10,
        textAlign: 'center',
        paddingStart: 60,
        marginTop: 50,
        marginBottom: 10
    },
    img4_wrapper: {
        width: 300,
        height: 290,
        paddingStart: 60,
        marginTop: 30,
        // marginBottom: 10
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

export default Screen_10;