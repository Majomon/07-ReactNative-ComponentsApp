import React, {useContext} from 'react';
import {Alert, View} from 'react-native';
import {showPrompt} from '../../../config/adapter/prompt.adapter';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: 'dark' ? 'dark' : 'light',
      },
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
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
      ],
      {
        userInterfaceStyle: 'dark' ? 'dark' : 'light',
      },
    );

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
      placeHolder: 'Place Holder',
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
