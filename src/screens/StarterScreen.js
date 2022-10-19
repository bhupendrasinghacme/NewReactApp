import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, PixelRatio } from 'react-native';

const StarterScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Learn CPR and Save a Life</Text>
      <Text style={styles.textMedium}>Train for the moments that could matter !!</Text>
      <View style={styles.img_div}>
        <Image style={{ width: 300, height: 300, }} source={require('../assets/images/main.png')} />
      </View>
      <View style={styles.button_element_wrapper}>
        <TouchableHighlight
          style={styles.button_element}
          onPress={() => {
            alert('You tapped the button!');
          }}
        >
          <Text style={styles.button_element_text}>START</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.footer_text_wrapper}>
        <Text style={{
          textAlign: 'center', color: 'white',
          fontWeight: '800', width: 300
        }}>
          Aditya Kapoor{'\n'}
          Prof and Head, Dept of Cardiology{'\n'}
          SGPGIMS, Lucknow
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#83D2BF"
  },
  bigBlue: {
    color: 'white',
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40
  },
  red: {
    color: 'red',
  },
  textMedium: {
    color: "white",
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12
  },
  img_div: {
    width: 350,
    height: 350,
    textAlign: 'center',
    margin: 20
  },
  button_element_wrapper: {
    paddingLeft: 20,
    paddingEnd: 20,
  },
  button_element: {
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#68a0cf',
    borderRadius: 50,

  },
  button_element_text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 22
  },
  footer_text_wrapper: {
    padding: 30
  }
});

export default StarterScreen

