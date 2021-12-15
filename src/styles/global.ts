import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
    font-size: 60%;
    font-family: 'Roboto', 'Lato', sans-serif;

    @media(min-width: 700px) {
      font-size: 62.5%;
    }
  }

  body {
    background: ${colors.background};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 , h5, h6, strong {
    font-weight: 500;
    color: ${colors.grey[100]};
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  p, span {
    font-size: 1.6rem;
    color: ${colors.textInPrimary};
  }

  li {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
