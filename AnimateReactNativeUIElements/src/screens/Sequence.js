import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native'

export default class Sequence extends Component {

  state = {
    animatedValueOne: new Animated.Value(0),
    animatedValueTwo: new Animated.Value(1)
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.animatedValueOne, {
        toValue: 150,
        duration: 1500,
      }),
      Animated.spring(this.state.animatedValueTwo, {
        toValue: 3,
      }),
      Animated.timing(this.state.animatedValueOne, {
        toValue: 0,
        duration: 1000,
      }),
      Animated.spring(this.state.animatedValueTwo, {
        toValue: .5,
      })
    ]).start()
  }

  render() {
    // const interpolateRotation = this.state.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // })
    const animationStyle = {
      transform: [
        { translateY: this.state.animatedValueOne },
        { scale: this.state.animatedValueTwo }
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