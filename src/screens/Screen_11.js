import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Screen_11 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>Medical Help arrives{'\n'}
                Shift to hospital
            </Text>
            <View style={styles.image_wrapper}>
                <Image style={styles.img} source={require('../assets/images/moot-ki-sawari-01.png')} />
            </View>
            <Text style={styles.text}>
                Great work…You have saved  a life!!
            </Text>
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
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 25
    },
    image_wrapper: {
        flexDirection: 'row',
        width: 300,
        height: 440,
        marginTop: 80,
        marginStart: 30
    },
    img: {
        width: "100%",
        height: "100%",
    },
    text: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '900',
        textAlign: 'center',
        marginTop: 25
    }
});

export default Screen_11;