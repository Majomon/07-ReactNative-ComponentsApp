import React from 'react';
import prompt from 'react-native-prompt-android';
import {Alert, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapter/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onShowPrompt = () => {
    showPrompt({
      title: 'Lorem Ipsum',
      subTitle: 'Esse tempor officia ea occaecat.',
      buttons: [
        {
          text: 'Ok',
          onPress: () => console.log('Ok'),
        },
      ],
      placeHolder:"Place Holder"
    });
    //!Código nativo
    /*     Alert.prompt(
      'Corroe electronico',
      'Tempor culpa esse reprehenderit eiusmod proident consectetur',
      (valor: string) => console.log(valor),
      'secure-text',
      'Soy el valor por defecto',
      "number-pad"
    ); */
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas" safe />

      <Button text="Alerta - 2  Botones" onPress={createTwoButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Alerta - 3  Botones" onPress={createThreeButtonAlert} />

      <View style={{height: 10}} />

      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
