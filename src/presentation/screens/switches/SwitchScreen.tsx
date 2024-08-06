import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { CustomView } from '../../components/ui/CustomView';
import { Separator } from '../../components/ui/Separator';

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
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          onChangue={value => setState({...state, isHungry: value})}
          text="¿Tiene hambre?"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChangue={value => setState({...state, isHappy: value})}
          text="¿Es feliz?"
        />
      </Card>
    </CustomView>
  );
};
