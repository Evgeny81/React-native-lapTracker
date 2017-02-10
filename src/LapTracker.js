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
  View,
  TouchableHighlight,
} from 'react-native';

export default class LapTracker extends Component {
    startStopButton() {
        return (<TouchableHighlight
                    underlayColor='red'
                    onPress={this.handleStartPress}
                    >
                   <Text>Start</Text>
               </TouchableHighlight>)
    }

    lapButton() {
        return <View style={styles.buttons}>
                   <Text>Lap</Text>
               </View>
    }

    handleStartPress() {
        alert('start was pressed')
    }

    border(color) {
        return {
            borderColor: color,
            borderWidth: 4
        }
    }

  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.header, this.border('yellow')]}>
            <View style={[styles.timerWrapper, this.border('red')]}>
                <Text> 00:00.00</Text>
            </View>
            <View style={[styles.buttonWrapper, this.border('green')]}>
                {this.startStopButton()}
                {this.lapButton()}
            </View>
          </View>
        <View style={[styles.footer, this.border('blue')]}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 1,
        backgroundColor: 'pink'
    },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

});

AppRegistry.registerComponent('LapTracker', () => LapTracker);