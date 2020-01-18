import { createGlobalStyle } from 'styled-components';
import { media, theme } from './theme';

const GlobalStyle = createGlobalStyle`

  body {
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.bodytext1};
    hyphens: none;
  }

  a {
    color: ${theme.colors.purple};
    text-decoration: none;
  }

  h1, h2, h3, h4, button {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  
  ${media('mobile')} {
    &.hide-mobile {
      display: none;
    }
  }

  ${media('tablet')} {
    &.hide-mobile {
      display: block;
    }
    &.hide-desktop {
      display: none;
    }
  }


  .responsiveGrid {
    margin-right: auto;
    margin-left: auto;
    padding-right: ${theme.gridOuterMargins.xs};
    padding-left: ${theme.gridOuterMargins.xs};
    overflow: hidden;

    ${media('tablet')} {
      padding-right: ${theme.gridOuterMargins.sm};
      padding-left: ${theme.gridOuterMargins.sm};
    }

    ${media('desktop')} {
      padding-right: ${theme.gridOuterMargins.md};
      padding-left: ${theme.gridOuterMargins.md};
    }
  }
  
  // Timeline styles
  .timeline {
    .block.greenish {
      fill: rgba(97,172,89,0.3) !important;
    }
    
    .text {
      stroke: ${theme.colors.black} !important;
      fill: ${theme.colors.black} !important;
      opacity: 0.4;
    }
    
    .block-marker {
      fill: ${theme.colors.white} !important;
    }
    
    .block-marker-cursor {
      cursor: ew-resize;
    }
  }
  
  //.selector-active {
  //  display: inline-block !important;
  //}
  //
  //.selector {
  //  display: none;
  //}
  //
  .selector:hover .block {
    //fill: #afd5d9 !important;
    cursor: all-scroll;
  }
`;

export default GlobalStyle;
