import { theme } from 'app/theme';

export function inRawPixels(inEm: string | number): number {
  return Number(inEm) * Number(theme.defaultFontSize);
}

export enum Device {
  Mobile,
  Tablet,
  SmallDesktop,
  Desktop,
}
