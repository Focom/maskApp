import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ButtonContainer extends Component {
    render(){
        return(
        <View>
            <View>
                <Text>Map</Text>
            </View>
            <View>
                <Text>List</Text>
            </View>
            <View>
                <Text>Stat</Text>
            </View>
            <View>
                <Text>Stat</Text>
            </View>
        </View>
        )
    }
}
export default ButtonContainer

// const styles = StyleSheet.create(
//     button_text = {
//         button_text : {
//         color : '#7fffd4',
//         fontSize : 20,
//     }
// })

// var BUTTON = ['map','list', 'stat', 'setting']
