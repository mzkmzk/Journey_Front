/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  ScrollView,
  UIScrollView,
  ImageView
} = ReactNative;



class Journey extends React.Component {
  render() {

    return (
      <UIScrollView>
        <ImageView source={{uri: 'http://my.apache.com/K-Report/Example/loadtime/img/girl2.jpg'}} />
        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app, plus the clean design of React.
        </Text>
      </UIScrollView>
      );
  }
}



AppRegistry.registerComponent('Journey', () => Journey);
