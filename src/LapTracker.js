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

import formatTime from 'minutes-seconds-milliseconds';

export default class LapTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeElapsed: null,
            running: false,
            startTime: null,
            laps: []
        }
    }

    startStopButton() {
        let style = this.state.running ? styles.buttonStop : styles.buttonStart;
        return (<TouchableHighlight
                    underlayColor='gray'
                    onPress={this.handleStartPress.bind(this)}
                    style={[styles.button, style]}
                    >
                   <Text>
                    {this.state.running ? "Stop" : "Start"}
                   </Text>
               </TouchableHighlight>)
    }

    lapButton() {
        return <TouchableHighlight
                style={styles.button}
                underlayColor='gray'
                onPress={this.handleLapPress.bind(this)}
                >
                   <Text>Lap</Text>
               </TouchableHighlight>
    }

    handleLapPress() {
        let lap = this.state.timeElapsed;

        this.setState({
            startTime: new Date();
            laps: this.state.laps.concat([lap])
        });
    }

    handleStartPress() {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({
                running: false
            });
            return;
        }
        this.setState({
            startTime: new Date()
        });
        this.interval = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running: true
            });
        }, 30)
    }

    laps() {
        return this.state.laps.map(function(time, index) {
            return <View style={styles.lap}>
                <Text style={styles.lapText}>
                    Lap #{index +1}
                </Text>
                <Text style={styles.lapText}>
                    {formatTime(time)}
                </Text>
            </View>
        })
    }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.timerWrapper}>
                <Text style={styles.timer}>
                 {formatTime(this.state.timeElapsed)}
                 </Text>
            </View>
            <View style={styles.buttonWrapper}>
                {this.startStopButton()}
                {this.lapButton()}
            </View>
          </View>
        <View style={styles.footer}>
            {this.laps()}
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
    timer: {
        fontSize: 60
    },
    button: {
        borderWidth: 2,
        width: 100,
        height: 100,
        borderRadius: 100/2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStart: {
        borderColor: '#00CC00'
    },
    buttonStop: {
        borderColor: '#CC0000'
    },
    lap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    lapText: {
        fontSize: 30
    }
});

AppRegistry.registerComponent('LapTracker', () => LapTracker);