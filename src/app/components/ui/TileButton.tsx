import history from 'app/utils/history';
import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  position: relative;
  margin: 0 10px;
  width: 200px;
  height: 180px;
  z-index: 10;
  border-color: gray !important;
  color: gray !important;
  cursor: pointer;
  text-shadow: 1px 1px 0 #d8e1eb;
  border-width: 1px;
  font-size: 28px;
  background: white;
`;

interface Props {
  linkUrl: string;
  label: string;
  iconClass?: string;
  icon?: JSX.Element;
}

const renderIcon = (icon: JSX.Element | undefined, iconClass: string | undefined): string | JSX.Element => {
  if (icon) {
    return icon;
  }

  if (iconClass) {
    return <i className={iconClass} style={{ fontSize: '60px', display: 'block' }} />;
  }

  return '';
};

export const TileButton: FC<Props> = (props) => {
  return (
    <Wrapper
      onClick={() => {
        history.push(props.linkUrl);
      }}
    >
      {renderIcon(props.icon, props.iconClass)}
      {props.label}
    </Wrapper>
  );
};
