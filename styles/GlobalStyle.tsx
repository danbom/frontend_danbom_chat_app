import { createGlobalStyle, css } from "styled-components";
import palette from "./palette";

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${palette.black};
  }

  body {
    font-family: AppleSDGothicNeo, sans-serif;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: AppleSDGothicNeo;
    font-weight: bold;
    font-display: swap;
    src: url("/fonts/AppleSDGothicNeoB.woff2") format("woff2"),
      url("/fonts/AppleSDGothicNeoB.woff") format("woff2");
  }

  @font-face {
    font-family: AppleSDGothicNeo;
    font-weight: 500;
    font-display: swap;
    src: url("/fonts/AppleSDGothicNeoSB.woff2") format("woff2"),
      url("/fonts/AppleSDGothicNeoSB.woff") format("woff");
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;
