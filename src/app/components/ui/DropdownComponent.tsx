import React, { FC } from 'react';
import { KeyMap } from 'app/types/KeyMap';
import { Dropdown } from 'primereact/dropdown';

interface Props {
  action: ((e: any) => void);
  value?: any;
  options: any[];
  id?: string;
  width?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const DropdownComponent: FC<Props> = (props) => {
  const { action, options, value, id, placeholder, width, disabled } = props;

  const formattedOptions: KeyMap[] = options.map((option: KeyMap) => {
    return { label: option.label, value: option.tag };
  });

  return (
    <Dropdown
      value={value}
      options={formattedOptions}
      id={id || ''}
      style={{ width: width || '100%', marginBottom: '10px' }}
      placeholder={placeholder || ''}
      disabled={disabled}
      onChange={(event: any) => {

        const appendState: KeyMap = {};
        const clickedValue = event.target.value || '';

        if (clickedValue && id) {
          appendState[id] = clickedValue;
        }

        return action(appendState);
      }}
    />
  );
};
