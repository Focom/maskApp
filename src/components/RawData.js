import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import BluetoothSerial from 'react-native-bluetooth-serial'

export default class RawData extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress=
                    {() => BluetoothSerial.enable()}>
                    <Text style={styles.button_text}>Enable bluetooth</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress=
                    {()=> BluetoothSerial.connect('00:14:03:06:13:DA')}>
                    <Text style={styles.button_text}>Connect to device</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress=
                    {()=> BluetoothSerial.disable()}>
                    <Text style={styles.button_text}>Disable Bluetooth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress= {()=> blAction()}>
                    <Text style={styles.button_text}>Listen to data</Text>
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
let blAction = function () {
    BluetoothSerial.write('c')
    BluetoothSerial
        .readFromDevice()
        .then((data) => {
            alert("CO2 : "+data+" ppm")
        });
}
