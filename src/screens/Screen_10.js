import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Screen_10 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Hello World</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83D2BF'
    }
})

export default Screen_10;