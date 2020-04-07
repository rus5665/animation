import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
} from 'react-native'

const { height } = Dimensions.get('window')

export default class Sequence extends Component {

  state = {
    animatedValueOne: new Animated.Value(0),
    animatedValueTwo: new Animated.Value(0),
    animatedValueThree: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.stagger(300, [
      Animated.timing(this.state.animatedValueOne, {
        toValue: height,
        duration: 1500,
      }),
      Animated.timing(this.state.animatedValueTwo, {
        toValue: height,
        duration: 1500,
      }),
      Animated.timing(this.state.animatedValueThree, {
        toValue: height,
        duration: 1500,
      }),
    ]).start()
  }

  render() {
    const animatedStyleOne = {
      height: this.state.animatedValueOne
    }
    const animatedStyleTwo = {
      height: this.state.animatedValueTwo
    }
    const animatedStyleThree = {
      height: this.state.animatedValueThree
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyleOne]} />
        <Animated.View style={[styles.box, animatedStyleTwo]} />
        <Animated.View style={[styles.box, animatedStyleThree]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    backgroundColor: 'green',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})