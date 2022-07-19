import { css } from 'linaria';
import { darkTheme, lightTheme } from './colors';
import { onDesktop } from './constants';

export const globals = css`
  :global() {
    @media (prefers-color-scheme: dark) {
      :root:not([color-theme="light"]) {
        ${darkTheme}
      }
      :root[color-theme="light"] {
        ${lightTheme}
      }
    }
    @media (prefers-color-scheme: light) {
      :root:not([color-theme="dark"]) {
        ${lightTheme}
      }
      :root[color-theme="dark"] {
        ${darkTheme}
      }
    }

    html {
      font-size: 16px;
      ${onDesktop} {
        font-size: 20px;
      }
      font-family: "Ubuntu", sans-serif;
      box-sizing: border-box;
    }
    h1, h2, h3, h4 {
      font-family: "Poppins", sans-serif;
      margin-top: 0;
    }
    p { margin-top: 0; }
    h1 { font-size: 4rem; }
    h2 { font-size: 3rem; }
    h3 { font-size: 1.6rem; }
    a {
      color: inherit;
      text-decoration: none;
      border: 0.5px solid aqua;
      font-style: italic;
    }

    body {
      padding: 0;
      margin: 0;
      background-color: black;
      color: white;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: table;
    }

    .text-gradient-mint-blue-dark {
      background: -webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%);
        background-clip: border-box;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      font-weight: 800;
    }
    .text-gradient-pink-blue {
      background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
        background-clip: border-box;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-box-decoration-break: clone;
      font-weight: 800;
    }
  }
`;
