import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native'

export default class Spring extends Component {
  constructor(props) {
    super(props)
    this.handlePressIn = this.handlePressIn.bind(this)
    this.handlePressOut = this.handlePressOut.bind(this)
  }

  state = {
    animation: new Animated.Value(1)
  }

  componentDidMount() {

  }

  handlePressIn() {
    Animated.spring(
      this.state.animation,
      {
        toValue: .5,
        duration: 1000,
      }
    ).start();
  }

  handlePressOut() {
    Animated.spring(
      this.state.animation,
      {
        toValue: 1,
        duration: 2000,
        friction: 1,
        tension: 20
      }
    ).start();
  }

  render() {
    const animationStyle = {
      transform: [
        { scale: this.state.animation }
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[styles.object, animationStyle]}>
            <Text>Press me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
  object: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})