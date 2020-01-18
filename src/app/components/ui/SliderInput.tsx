import styled from 'styled-components';
import * as React from 'react';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { FC } from 'react';
import { KeyMap } from 'app/types/KeyMap';

const Wrapper = styled.div``;

interface Props {
  label: string;
  id?: string;
  value: number;
  min: number;
  max: number;
  action?: any;
  hideMarginTop?: boolean;
  sliderAction?: ((e: any) => void);
  disabled?: boolean;
}

function sliderAction(key: string, actionCallback: (e: any) => void, event: any): any {
  const appendState: KeyMap = {};
  const value = event.hasOwnProperty('value') ? event.value : undefined;

  if (value) {
    appendState[key] = value;
  }

  return actionCallback(appendState);
}

const SliderInput: FC<Props> = (props) => {
  const { action, id, disabled } = props;

  const textInputAction = (event: any) => {

    const appendState: KeyMap = {};
    const value = event.target.value || '';

    if (value) {
      appendState[id || ''] = value;
    }

    return props.action(appendState);
  };

  return (
    <Wrapper>
      <h3 style={{fontSize: '14px', marginTop: props.hideMarginTop ? '' : '10px', marginBottom: '2px'}}>{props.label}</h3>
      <InputText
        value={props.value}
        style={{ width: '95%' }}
        type="number"
        id={props.id || ''}
        onChange={textInputAction}
      />
      <Slider
        value={props.value}
        disabled={disabled}
        onChange={(e: any) => {
          sliderAction(id || '', action, e);
        }}
        style={{ width: '95%' }}
        min={props.min}
        max={props.max}
      />
    </Wrapper>
  );
};

export default SliderInput;
