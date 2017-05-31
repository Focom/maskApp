
import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, WebView} from 'react-native';
import MapView from 'react-native-maps';


export default class Carte extends Component {
    render() {
        /*return (
            <View>
          <Text>Yo</Text> 
           <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  ></MapView>
           </View>
        );
    }*/
    
    return(
    <WebView
        source={{uri: 'https://www.google.fr/maps'}}
        style={{marginTop: 0, width: '100%', height: '100%'}}
      />
     )
}
}
