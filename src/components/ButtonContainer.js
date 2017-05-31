import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions,} from 'react-native-router-flux'

export default class ButtonContainer extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress = {() => Actions.Carte({})}>
                    <Text style={styles.button_text}>Carte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress = {() => Actions.RawData({})}>
                    <Text style={styles.button_text}>RawData</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress = {() => Actions.Stat({})}>
                    <Text style={styles.button_text}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress = {() => Actions.Setting({})}>
                    <Text style={styles.button_text}>Setting</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button_text: {
        color: 'black',
        fontSize: 15
    },
    container: {
        display: 'flex',
        flexDirection: 'row',

        width: '100%',
        height: 50,

        backgroundColor: '#903749',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'flex-end'
    },
    button: {
        display: 'flex',
        borderRadius: 3,
        width: '20%',
        height: '75%',
        marginHorizontal: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
