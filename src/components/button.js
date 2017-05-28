import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Button extends Component {
    render(){
        return(
            <View>
                <Text style={styles.button_text}> yo yo</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create(
    button_text = {
        button_text : {
        color : '#7fffd4',
        fontSize : 30,
    }
})
