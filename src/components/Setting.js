import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Setting extends Component {
    render() {
        return (
            <View>
           <Text style = {styles.text}>En attendant d'avoir des paramètres voila une image de Flux'O</Text>   
           <Image source={require('../jaune.jpg')} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
  text: {
    fontWeight: '500',
    fontSize : 20,
    marginBottom: 20
  },
});