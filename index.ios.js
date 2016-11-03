/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './Src/Utils/Font_Awesome/scss/font-awesome.scss'

import Login from './Src/Containers/Login/Login'

import { configure_index_store } from './Src/Store/configure_store.js'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Src/Global/Font/set_font.scss'
import './Src/Global/CSS/reset.scss'

export default class Journey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Hello,I am K
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Journey', () => Journey);
