import React, {useContext} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/ThemeContext';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';

export const Animation101Screen = () => {
  const {colors} = useContext(ThemeContext);

  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingtopPosition,
  } = useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {backgroundColor: colors.primary},
          {
            opacity: animatedOpacity,

            transform: [{translateY: animatedTop}],
          },
        ]}
      />

      <Button
        onPress={() => {
          fadeIn({});
          startMovingtopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750,
          });
        }}
        styles={{marginTop: 10}}
        text="FadeIn"
      />

      <Button
        onPress={() => fadeOut({})}
        styles={{marginTop: 10}}
        text="FadeOut"
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
