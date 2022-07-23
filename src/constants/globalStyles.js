import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    /////////////////////// COLORS ///////////////////////
    --color-dark-100: hsl(230, 35%, 7%);
    --color-dark-200: hsl(0, 0%, 59%);
    --color-light: hsl(0, 0%, 100%);
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
    font-size: 150px;
  }

  h2 {
    font-size: 100px;
  }
  
  h3 {
    font-size: 56px;
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    color: var(--color-accent);
    letter-spacing: 4px;
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
    color: var(--color-light);
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
