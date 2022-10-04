import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MillerBanner';
    src: local('./assets/fonts/MillerBannerLight.otf') format('truetype');
  }

  :root {
    --Husk: #B69F58;
    --Cashmere: #cdaf97;
    --FruitSallad: #4caf50;
    --RedOrange: #f44336;
    --SummerSky: #29b6f6;
    --Porcelain: #e0ddda;
    --WhiteSmoke: #F1F1F1;
    --Gainsboro: #DDDDDD;
    --White: #FFFFFF;
    --MillerBanner: "MillerBanner";
    --Helvetica: "Helvetica", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--MillerBanner);
    font-size: 1.6rem;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--MillerBanner);
    text-rendering: optimizeLegibility; // Enable ligatures and kerning
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyles