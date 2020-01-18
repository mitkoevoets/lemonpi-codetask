import styled from 'styled-components';
import * as React from 'react';
import { FC } from 'react';
import { KeyMap } from 'app/types/KeyMap';
import {Spinner} from 'primereact/spinner';

const Wrapper = styled.div``;

interface Props {
  label: string;
  id?: string;
  value: number;
  min: number;
  max: number;
  action?: any;
  hideMarginTop?: boolean;
  spinnerAction?: ((e: any) => void);
}

function spinnerAction(key: string, actionCallback: (e: any) => void, event: any): any {
  const appendState: KeyMap = {};
  const value = event.hasOwnProperty('value') ? event.value : undefined;

  if (value) {
    appendState[key] = value;
  }

  return actionCallback(appendState);
}

const SpinnerInput: FC<Props> = (props) => {
  const { action, id } = props;

  return (
    <Wrapper>
      <h3 style={{fontSize: '14px', marginTop: props.hideMarginTop ? '' : '10px', marginBottom: '2px'}}>{props.label}</h3>
      <Spinner
        value={props.value}
        onChange={(e: any) => {
          spinnerAction(id || '', action, e);
        }}
        style={{ width: '95%' }}
        min={props.min}
        max={props.max}
      />
    </Wrapper>
  );
};

export default SpinnerInput;
