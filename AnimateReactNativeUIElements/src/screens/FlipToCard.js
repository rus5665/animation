import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native'

export default class FlipToCard extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
    this.value = 0
    this.animatedValue.addListener(({ value }) => {
      this.value = value
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 800,
      }).start()
    } else {
      Animated.timing(this.animatedValue, {
        toValue: 180,
        duration: 800,
      }).start()
    }

  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }
    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
            <Text>Front</Text>
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
            <Text>Back</Text>
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => this.flipCard()}>
          <Text>Flip!</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipCard: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
    backgroundColor: 'blue',
    position: 'absolute'
  },
})
