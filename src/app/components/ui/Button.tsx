/* Main Button component */
import styled from 'styled-components';
import { theme } from 'app/theme';

function getBackgroundColor(props: ButtonProps) {
  if (props.active) {
    return theme.colors.ultramarine;
  }

  return 'transparent';
}

/**
 * Props
 *
 * primary  = give the button a primary color, otherwise transparent
 * upper    = capitalize the button text
 * nomargin = remove margins
 */
export const Button = styled.button`
  display: inline-block;
  color: ${(props: ButtonProps) => (props.active ? 'white' : '#555')};
  opacity: 0.5;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: ${(props: ButtonProps) => (props.upper ? 'uppercase' : '')};
  text-decoration: none;
  white-space: nowrap;
  background-color: ${(props: ButtonProps) => getBackgroundColor(props)};
  border-radius: 4px;
  border: 1px solid ${(props: ButtonProps) => (props.primary ? '#33C3F0' : '#bbb')};
  cursor: pointer;
  box-sizing: border-box;
  padding: ${(props: ButtonProps) => props.padding || '0 30px'};
  margin: ${(props: ButtonProps) => props.margin || '0'};
  width: ${(props: ButtonProps) => props.width || '0'};
  height: ${(props: ButtonProps) => props.height || '38px'};

  :hover,
  :focus {
    color: ${(props: ButtonProps) => (props.primary ? '#FFF' : '#333')};
    border-color: ${(props: ButtonProps) => (props.primary ? '#1EAEDB' : '#888')};
    background-color: ${(props: ButtonProps) => (props.primary ? '#1EAEDB' : '')};
    outline: 0;
  }
`;
export interface ButtonProps {
  primary?: boolean;
  upper?: boolean;
  active?: boolean;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}
//
// /* Submit button component */
// export const Submit = Button.withComponent('input');
//
// /* Link button component */
// export const LinkButton = Button.withComponent('a');
