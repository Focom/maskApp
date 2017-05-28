import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import {ButtonContainer} from './ButtonContainer.js'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome on the Fluxo App
        </Text>        
        <Text>
          Click On the buttons to go to a section
        </Text>
          <ButtonContainer/>        
      </View>

    )
  }
}

