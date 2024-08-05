import React from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  isOn: boolean;
  text?: string;

  onChangue: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, text, onChangue}: Props) => {
  return (
    <View style={styles.switchRow}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}

      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChangue}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 5,
  },
});
