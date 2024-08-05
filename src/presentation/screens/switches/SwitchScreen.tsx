import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {Switch} from 'react-native';
import {CustomSwitch} from '../../components/ui/CustomSwitch';

export const SwitchScreen = () => {
  /*  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState); */

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={{marginTop: 100, marginHorizontal: 10}}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChangue={value => setState({...state, isActive: value})}
          text="¿Está activo?"
        />

        <CustomSwitch
          isOn={state.isHungry}
          onChangue={value => setState({...state, isHungry: value})}
          text="¿Tiene hambre?"
        />

        <CustomSwitch
          isOn={state.isHappy}
          onChangue={value => setState({...state, isHappy: value})}
          text="¿Es feliz?"
        />
      </Card>
    </CustomView>
  );
};
