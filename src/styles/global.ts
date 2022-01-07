import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, input, button {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  #root {
    margin: 0;
    padding: 0;
  }

  .content {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
