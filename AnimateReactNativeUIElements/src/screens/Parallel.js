import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native'

export default class Parallel extends Component {

  state = {
    animatedValueOne: new Animated.Value(0),
    animatedValueTwo: new Animated.Value(1),
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.animatedValueOne, {
        toValue: 500,
        duration: 2300,
      }),
      Animated.spring(this.state.animatedValueTwo, {
        toValue: 3,
      })
    ]).start()
  }

  render() {
    const animatedStyle = {
      transform: [
        { translateY: this.state.animatedValueOne },
        { scale: this.state.animatedValueTwo }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
  }
})