import { createGlobalStyle } from 'styled-components';
import { BREAKPOINTS } from './breakpoints';

const GlobalStyles = createGlobalStyle`
  html {
    /////////////////////// COLORS ///////////////////////
    --color-dark: hsl(230, 35%, 7%);
    --color-light-100: hsl(0, 0%, 100%);
    --color-light-200: hsla(0, 0%, 100%, 0.4);
    --color-accent: hsl(231, 77%, 90%);
    --color-transparent: hsla(0, 0%, 100%, 0.04);

    /////////////////////// PADDING ///////////////////////
    --padding-xxs: 4px;
    --padding-xs: 8px;
    --padding-sm: 16px;
    --padding-md: 32px;
    --padding-lg: 64px;
    --padding-xl: 128px;
    --padding-xxl: 256px;
    --padding-xxxl: 512px;

    /////////////////////// MARGIN ///////////////////////
    --margin-xxs: 0.25em;
    --margin-xs: 0.5em;
    --margin-sm: 1em;
    --margin-md: 2em;
    --margin-lg: 4em;
    --margin-xl: 8em;
    --margin-xxl: 16em;
    --margin-xxxl: 32em;

    /////////////////////// FONT SIZES ///////////////////////
    --font-size-heading-1: 80px;
    --font-size-heading-2: 56px;
    --font-size-heading-3: 24px;
    --font-size-heading-4: 16px;
    --font-size-heading-5: 16px;
    --font-size-subheading-1: 28px;
    --font-size-subheading-2: 14px;
    --font-size-navlink: 16px;
    --font-size-paragraph: 15px;

    @media screen and ${BREAKPOINTS.smMin} {
      --font-size-heading-1: 150px;
      --font-size-heading-2: 80px;
      --font-size-heading-3: 40px;
      --font-size-heading-4: 24px;
      --font-size-heading-5: 20px;
      --font-size-navlink: 14px;
      --font-size-paragraph: 16px;
    }

    @media screen and ${BREAKPOINTS.lgMin} {
      --font-size-heading-2: 100px;
      --font-size-heading-3: 56px;
      --font-size-heading-4: 32px;
      --font-size-heading-5: 28px;
      --font-size-navlink: 16px;
      --font-size-paragraph: 18px;

    }

    /////////////////////// FONT WEIGHTS ///////////////////////
    --font-regular: 400;
    --font-bold: 700;

    /////////////////////// LINE HEIGHTS ///////////////////////
    --line-height-sm: 1;
    --line-height-md: 1.25;
    --line-height-lg: 1.5;
  }

  /////////////////////// TYPOGRAPHY ///////////////////////
  h1, h2, h3, h4, h5 {
    font-family: 'Bellefair', serif;
    font-weight: var(--font-regular);
    text-transform: uppercase;
  }

  h1 {
    font-size: var(--font-size-heading-1);
  }

  h2 {
    font-size: var(--font-size-heading-2);
  }

  h3 {
    font-size: var(--font-size-heading-3);
  }

  h4 {
    font-size: var(--font-size-heading-4);
  }

  h5 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: var(--font-size-heading-5);
    color: var(--color-accent);
    letter-spacing: 4px;
  }

  p {
    font-size: var(--font-size-paragraph);
    color: var(--color-accent);
    line-height: 25px;
    @media screen and ${BREAKPOINTS.smMin} {
      line-height: 28px;
    }
      @media screen and ${BREAKPOINTS.lgMin} {
      line-height: 32px;
    }
  }


  /////////////////////// CSS Reset
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Barlow', sans-serif;
    background-color: var(--color-dark-100);
    color: var(--color-light-100);
    max-height: 100vh;
    max-width: 100vw;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

`;

export default GlobalStyles;
