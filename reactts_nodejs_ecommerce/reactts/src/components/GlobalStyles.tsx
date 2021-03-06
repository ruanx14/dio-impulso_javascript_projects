import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; 
    padding: 0;
    border-spacing: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    //overflow-x: hidden;
    scroll-behavior: smooth;
  }
  a{
    text-decoration-line: none;
    color: unset;
  }
`;
 
export default GlobalStyle;