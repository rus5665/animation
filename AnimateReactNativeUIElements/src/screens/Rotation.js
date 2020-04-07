import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native'

export default class Rotation extends Component {

  state = {
    animatedValue: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 1500,
    }).start()
  }

  render() {
    const interpolateRotation = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0rad', '10rad']
    })
    const animationStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animationStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})