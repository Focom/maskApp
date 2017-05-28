import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  Scene
} from 'react-native-router-flux'

import {ButtonContainer} from './components/ButtonContainer.js'

import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
     <Router>
       <Scene key='root' style={{paddingTop: 54}}>
         <Scene key='home' component={Home} title='Home' initial={true}/>
         <Scene key='home' component={Home} title='Home'/>
        </Scene>
      </Router>
    );
  }
}

export default App