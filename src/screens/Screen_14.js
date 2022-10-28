import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Screen_14 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>
                You now have the skills to{'\n'}
                save a life
            </Text>
            <View style={styles.image_wrapper}>
                <Image style={styles.img} source={require('../assets/images/indiA-01.png')} />
            </View>
            <Text style={styles.text}>
                So if you come across a person who has had a{'\n'}
                cardiac arrest USE THIS SKILL{'\n'}
                {'\n'}
                Invite your friends and family to learn this{'\n'}
                lifesaving skill

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
        width: 280,
        height: 300,
        marginTop: 60,
        marginStart: 50
    },
    img: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 13,
        fontWeight: "900",
        marginTop: 100
    }

})

export default Screen_14;
