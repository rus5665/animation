import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native'

export default class Timing extends Component {

  state = {
    animation: new Animated.Value(100)
  }

  componentDidMount() {
    Animated.timing(
      this.state.animation,
      {
        toValue: 150,
        duration: 3000,
        easing: Easing.bounce
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={[styles.object, { height: this.state.animation }]}>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  object: {
    backgroundColor: 'orange',
    width: 100,
    height: 100
  }
})
