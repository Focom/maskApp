import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'
import ButtonContainer from './ButtonContainer.js'


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome on the Flux'O App
        </Text>
        <Text style={{paddingBottom: 15, fontSize: 20}}>
          Choose a section below :
        </Text>
        <View style = {styles.buttons}>
        <ButtonContainer/>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 38
  },
  container: {
    display: 'flex',
    backgroundColor: 'lightgrey',
    flexDirection: 'column',
    flex: 1
  },
  buttons : {
    // display : 'flex',
    // flex : 1,
    // alignItems : 'flex-end'
  }
})
