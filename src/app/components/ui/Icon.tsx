import React from 'react';
import { DateRange } from 'styled-icons/material/DateRange';
import { LinkAlt } from 'styled-icons/boxicons-regular/LinkAlt';
import { Bullseye } from 'styled-icons/boxicons-regular/Bullseye';
import { GripLines } from 'styled-icons/fa-solid/GripLines';
import { CaretLeft } from 'styled-icons/boxicons-regular/CaretLeft';
import { CaretRight } from 'styled-icons/boxicons-regular/CaretRight';
import { TextFields } from 'styled-icons/material/TextFields';
import { Calendar } from 'styled-icons/feather/Calendar';
import { Check } from 'styled-icons/boxicons-regular/Check';
import { Crosshair } from 'styled-icons/feather/Crosshair';
import { Cancel } from 'styled-icons/typicons/Cancel';
import { SkipBack } from 'styled-icons/feather/SkipBack';
import { UpArrow } from 'styled-icons/boxicons-regular/UpArrow';
import styled from 'styled-components';

export enum IconType {
  RANGE = 'RANGE',
  DIAGRAMS = 'DIAGRAMS',
  TEXT_FIELD = 'TEXT_FIELD',
  SNAP = 'SNAP',
  FOCUS = 'FOCUS',
  CARET_LEFT = 'CARET_LEFT',
  CARET_RIGHT = 'CARET_RIGHT',
  CALENDER_PLUS = 'CALENDER_PLUS',
  CHECK = 'CHECK',
  CROSSHAIR = 'CROSSHAIR',
  CANCEL = 'CANCEL',
  UP_ARROW = 'UP_ARROW',
  BACK = 'BACK',
}

export interface IconProps {
  iconType: IconType;
  color?: string;
}

const Wrapper = styled.div`
  display: inline-block;
`;

export class Icon extends React.PureComponent<IconProps> {
  icon() {
    const { iconType, color } = this.props;

    const size = 19;

    switch (iconType) {
      case IconType.RANGE:
        // @ts-ignore
        return <DateRange size={size} color={color || 'Black'} />;
      case IconType.DIAGRAMS:
        // @ts-ignore
        return <GripLines size={size} color={color || 'Black'} />;
      case IconType.TEXT_FIELD:
        // @ts-ignore
        return <TextFields size={size} color={color || 'Black'} />;
      case IconType.SNAP:
        // @ts-ignore
        return <LinkAlt size={size} color={color || 'Black'} />;
      case IconType.FOCUS:
        // @ts-ignore
        return <Bullseye size={size} color={color || 'Black'} />;
      case IconType.CARET_LEFT:
        // @ts-ignore
        return <CaretLeft size={size} color={color || 'Black'} />;
      case IconType.CARET_RIGHT:
        // @ts-ignore
        return <CaretRight size={size} color={color || 'Black'} />;
      case IconType.CALENDER_PLUS:
        // @ts-ignore
        return <Calendar size={size} color={color || 'Black'} />;
      case IconType.CHECK:
        // @ts-ignore
        return <Check size={size} color={color || 'Black'} />;
      case IconType.CROSSHAIR:
        // @ts-ignore
        return <Crosshair size={size} color={color || 'Black'} />;
      case IconType.CANCEL:
        // @ts-ignore
        return <Cancel size={size} color={color || 'Black'} />;
      case IconType.UP_ARROW:
        // @ts-ignore
        return <UpArrow size={size} color={color || 'Black'} />;
      case IconType.BACK:
        // @ts-ignore
        return <SkipBack size={size} />;
    }

    return '';
  }

  render() {
    return <Wrapper>{this.icon()}</Wrapper>;
  }
}
