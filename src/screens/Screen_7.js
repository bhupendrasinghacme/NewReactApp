import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

const Screen_7 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>
                Cardiopulmonary resuscitation (CPR) is an{'\n'}
                emergency procedure that can help sav{'\n'}
                a person’s life if the he or she has{'\n'}
                had a Cardiac arrest
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
            <Text style={styles.header_text}>
                Cardiac arrest means that the heart{'\n'}
                suddenly stops beating
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
            <Text style={styles.header_text}>
                This disrupts the heart's pumping action and{'\n'}
                the brain and rest of the body do not{'\n'}
                get blood supply to keep{'\n'}
                them working

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
            <Text style={styles.header_text}>
                CPR uses chest compressions to imitate the{'\n'}
                pumping action of the heart so that blood{'\n'}
                keeps flowing throughout the body and{'\n'}
                keeps the organs intact
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83D2BF'
    },
    header_text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 60
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

export default Screen_7;