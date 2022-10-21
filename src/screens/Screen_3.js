import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';

const Screen_3 = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/background1.png')}
                resizeMode="cover"
                style={styles.background1}>
                <Text style={styles.header_text}>
                    Why is Time of essence
                </Text>
                <Text style={styles.text1}>
                    Cardiac activity must be re-started in 3 minutes{'\n'}
                    otherwise brain will get permanent damage

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
                    Without immediate help the victim’s chances of{'\n'}
                    survival are nearly zero
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
                    Every 1 minute delay in initiating life saving{'\n'}
                    measures by bystanders decreases the{'\n'}
                    chances of survival by 10%

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
                    Without CPR and/or the use of a{'\n'}
                    Shock Machine (AED), death will occur in a{'\n'}
                    few minutes (8-10 minutes)


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
            </ImageBackground>
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
        marginTop: 15
    },
    text1: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,
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
    background1: {
        opacity: 0.2
    }
})

export default Screen_3;