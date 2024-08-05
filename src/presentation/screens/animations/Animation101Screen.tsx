import React, {useRef} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';

export const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      /*      easing: Easing.elastic(4), */
      easing: Easing.bounce,
    }).start(() => console.log('Animación terminada'));

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('Animación terminada'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />

      {/* Sino le paso argumentos a la funcion puedo pasarlo como muestro abajo */}
      <Pressable onPress={fadeIn} style={{marginTop: 10}}>
        <Text>Fade In</Text>
      </Pressable>

      <Pressable onPress={fadeOut} style={{marginTop: 10}}>
        <Text>Fase Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
