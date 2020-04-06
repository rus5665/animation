import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native'

export default class Color extends Component {

  state = {
    animatedValue: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: 150,
      duration: 1500,
    }).start()
  }

  render() {
    const interpolateColor = this.state.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0,0,0)', 'rgb(51,250,170)']
    })
    const animationStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.state.animatedValue }
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