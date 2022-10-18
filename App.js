import React, { Component } from 'react'
import { StyleSheet, Text, View, YellowBox } from 'react-native'
impoet {  }
export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.change_color}> Hello User </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'yellow',
  },
  change_color: {
    color: 'green',
    fontSize: 30,
  }

});

export default App
