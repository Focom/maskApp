import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native'

import {Router, Scene} from 'react-native-router-flux'

// // import ButtonContainer from './components/ButtonContainer.js'
import Carte from './components/Carte.js'
import Setting from './components/Setting.js'
import Stat from './components/Stat.js'
import Home from './components/Home.js'
import RawData from './components/RawData.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={styles.rootScene}>
          <Scene key='Home' component={Home} title='Home' initial={true}/>
          <Scene key='Carte' component={Carte} title='Carte'/>
          <Scene key='RawData' component={RawData} title='RawData'/>          
          <Scene key='Stat' component={Stat} title='Geolocalisation'/>
          <Scene key='Setting' component={Setting} title='Setting'/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  router: {
    display: 'flex'
  },
  rootScene: {
    paddingTop: 54
  }
})