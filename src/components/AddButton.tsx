import React from 'react';
import { View, StyleSheet, TouchableHighlight, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class AddButton extends React.Component {
  mode = new Animated.Value(0);

  buttonSize = new Animated.Value(1);

  toggleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -100],
    });

    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });

    const timeX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, -24],
    });

    const timeY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -150],
    });

    const pulseX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-24, 50],
    });

    const pulseY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, -100],
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const sizeStyle = {
      transform: [{ scale: this.buttonSize }],
    };

    return (
      <View style={{ position: 'absolute', alignItems: 'center' }}>
        <Animated.View
          style={{
            position: 'absolute',
            left: thermometerX,
            top: thermometerY,
          }}
        >
          <View style={styles.secondaryButton}>
            <Icon name="cloud" size={24} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{ position: 'absolute', left: timeX, top: timeY }}
        >
          <View style={styles.secondaryButton}>
            <Icon name="activity" size={24} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{ position: 'absolute', left: pulseX, top: pulseY }}
        >
          <View style={styles.secondaryButton}>
            <Icon name="code" size={24} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{ position: 'absolute', left: pulseX, top: pulseY }}
        >
          <View style={styles.secondaryButton}>
            <Icon name="user" size={24} color="#FFF" />
          </View>
        </Animated.View>

        <Animated.View style={[styles.button, sizeStyle]}>
          <TouchableHighlight onPress={this.toggleView} underlayColor="#171F33">
            <Animated.View style={{ transform: [{ rotate: rotation }] }}>
              <Icon name="plus" size={30} color="#FFF" />
            </Animated.View>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#171F33',
    position: 'absolute',
    marginTop: -60,
    shadowColor: '#586589',
    shadowRadius: 5,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: '#586589',
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#586589',
  },
});
