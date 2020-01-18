import React from 'react';
import styled from 'styled-components';

// @ts-ignore
import tulpenteeltImage from './tulpenteelt.jpg';
import { FC } from 'react';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  z-index: -10;
`;

const BackgroundDiv = styled.div`
  background-image: url(${tulpenteeltImage});
  background-size: cover;
  opacity: 0.2;
  height: 1800px;
`;

interface Props {
}

const Background: FC<Props> = (props) => {
  return (
    <Wrapper>
      <BackgroundDiv />
      <BackgroundDiv />
    </Wrapper>
  );
};

export default Background;
