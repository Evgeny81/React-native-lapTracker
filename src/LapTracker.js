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

export default class LapTracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.showPart}>

        </View>

        <View style={styles.managingPart}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
    showPart: {
        flex: 3,
        backgroundColor: 'grey'
    },
    managingPart: {
        flex: 8,
        backgroundColor: 'pink'
    }
});

AppRegistry.registerComponent('LapTracker', () => LapTracker);