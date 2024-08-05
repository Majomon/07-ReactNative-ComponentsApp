import prompt from 'react-native-prompt-android';

interface Props {
  title: string;
  subTitle?: string;
  buttons: PropsButton[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeHolder?: string;
  defaultValue?: string;
}

interface PropsButton {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPrompt = ({
  title,
  subTitle,
  buttons,
  promptType="plain-text",
  placeHolder,
  defaultValue,
}: Props) => {
  prompt(title, subTitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeHolder,
  });
};
