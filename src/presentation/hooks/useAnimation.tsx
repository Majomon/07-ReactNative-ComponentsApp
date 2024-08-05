import React, {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({toValue = 1, duration = 300, callback = () => {}}) => {
    /*     Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      //  easing: Easing.elastic(4),
      easing: Easing.bounce,
    }).start(() => console.log('Animación terminada')); */

    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({toValue = 0, duration = 300, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);

    /*     () => animatedTop.resetAnimation() */
  };

  const startMovingtopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver: true,
      easing,
    }).start(callback);
  };

  return {
    //Propiedades
    animatedOpacity,
    animatedTop,

    //Métodos
    fadeIn,
    fadeOut,
    startMovingtopPosition,
  };
};
