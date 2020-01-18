export const colors = {
  basic: '#6f7a90',
  otherGrey: '#c3c6d0',

  black: '#000000',
  greyblack: '#676C72',
  darkergrey: '#BBBBBB',
  darkgrey: '#DDDDDD',
  mediumgrey: '#E8E8E8',
  lightgrey: '#F2F2F2',
  white: '#FFFFFF',

  purple: '#6320F4',
  darkPurple: '#511BC6',

  lighterCobaltBlue: '#79bcff',
  lightCobaltBlue: '#549dff',
  cobaltBlue: '#0e74ff',

  ultramarine: '#0f4cff',

  lightCobaltGreen: '#96f1c8',
  cobaltGreen: '#19F18E',
  darkCobaltGreen: '#0dd183',
  darkerCobaltGreen: '#12ad66',

  coral: '#FF7A6C',
  darkCoral: '#e56d60',
  darkerCoral: '#b25c55',

  russianGreen: '#2B634E',
  brown: '#4F4A3A',
  purpleBrown: '#503E40',

  prussianBlue: '#293F48',

  iceBlue: '#EAFAFF',
  chalkBlue: '#F3FCFF',
  chalkGreen: '#E8FDF3',
  chalkCopper: '#d7f1f1',

  // Displays
  dBackground: 'rgba(44,44,55, 0.9)',
  dBlueActive: 'rgba(140,225,255,1)',
  dBlueNotActive: 'rgba(90,225,255,0.025)',
  dBlueBoxShadow: '0px -2px 4px rgba(90,255,255,0.4)',

  // Spectrum
  uv350nm: '#090018',
  uv380nm: '#1d0050',
  violet400nm: '#5b2a8b',
  blue450nm: '#010afe',
  blue475nm: '#00eef1',
  turquoise500nm: '#00ff8a',
  green525nm: '#00ff05',
  mud550nm: '#abf100',
  yellow575nm: '#f8f706',
  orange600nm: '#f48d21',
  red650nm: '#e11e27',
  magenta700nm: '#75003a',
  farRed750nm: '#380003',
  infraRed800nm: '#2e1518',
};

export const spaces = {
  xs: '0.26666666666666666rem',
  s: '0.5333333333333333rem',
  m: '1.0666666666666667rem',
  l: '1.6rem',
  xl: '2.1333333333333333rem',
  xxl: '2.6666666666666665rem',
};

const defaultFontSize = 14;

const cornerRounding = '5px';

export const fontSizes = {
  h1: '40px',
  h2: '28px',
  h3: '24px',
  subtitle: '18px',
  strong: '16px',
  p: '14px',
  small: '12px',

  xl: '50px',

  bodytext1: defaultFontSize + 'px',
  bodytext2: '13px',
  button: '16px',
  link: '15px',
  h4: '16px',
  h5: '16px',
};

const desktopFontSizes = {
  h1: '56px',
  h2: '44px',
  h3: '26px',

  subtitle: '18px',
  strong: '16px',
  p: '14px',
  small: '12px',

  xl: '50px',

  h4: '22px',
  h5: '18px',
  bodytext1: '17px',
  bodytext2: '17px',
  button: '16px',
  link: '15px',
};

const lineHeights = {
  h1: '24px',
  h2: '21px',
  h3: 'normal',
  h4: 'normal',
  h5: 'normal',
  bodytext1: '20px',
  bodytext2: '13px',
  link: '15px',
};

const desktopLineHeights = {
  h1: '58px',
  h2: '46px',
  h3: '28px',
  h4: 'normal',
  h5: '18px',
  bodytext1: '22px',
  bodytext2: '13px',
  link: '15px',
};

interface FlexboxProperty {
  xs: string; // em
  sm: string; // em
  md: string; // em
  lg: string; // em
}

interface Flexboxgrid {
  gridSize: string;
  gutterWidth: string;
  outerMargin: string;
  mediaQuery: string;
  breakpoints: FlexboxProperty;
}

const flexboxgrid: Flexboxgrid = {
  gridSize: '12',
  gutterWidth: '0.75', // rem
  outerMargin: '0', // rem -- is defined in GlobalStyle
  mediaQuery: 'only screen',
  breakpoints: {
    xs: '0', // em ~ 0px
    sm: '37.5', // em ~ 600px
    md: '57.5', // em ~ 840px
    lg: '84.375', // em ~ 1350
  },
};

const gridOuterMargins: FlexboxProperty = {
  xs: '0',
  sm: '24px',
  md: '144px',
  lg: '144px',
};

export const device = {
  mobile: `(min-width: ${flexboxgrid.breakpoints.xs}em)`,
  tablet: `(min-width: ${flexboxgrid.breakpoints.sm}em)`,
  desktopSmall: `(min-width: ${flexboxgrid.breakpoints.md}em)`,
  desktop: `(min-width: ${flexboxgrid.breakpoints.lg}em)`,
};

export const media = (deviceKey: keyof typeof device) => {
  return `@media screen and ${device[deviceKey]}`;
};

interface ThemeInterface {
  colors: { [key in keyof typeof colors]: string };
  spaces: { [key in keyof typeof spaces]: string };
  defaultFontSize: number;
  cornerRounding: string;
  fontSizes: { [key in keyof typeof fontSizes]: string };
  desktopFontSizes: { [key in keyof typeof fontSizes]: string };
  device: { [key in keyof typeof device]: string };
  lineHeights: { [key in keyof typeof lineHeights]: string | object };
  desktopLineHeights: { [key in keyof typeof lineHeights]: string | object };
  flexboxgrid: Flexboxgrid;
  gridOuterMargins: FlexboxProperty;
}

const theme: ThemeInterface = {
  colors,
  spaces,
  defaultFontSize,
  cornerRounding,
  fontSizes,
  lineHeights,
  desktopLineHeights,
  desktopFontSizes,
  device,
  flexboxgrid,
  gridOuterMargins,
};

export { theme, ThemeInterface };
