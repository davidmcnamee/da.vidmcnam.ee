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
    }
    a {
      color: var(--link);
      text-decoration: none;
    }

    body {
      padding: 0;
      margin: 0;
      background-color: var(--background);
      transition: all 0.3s ease-in-out;
      color: var(--text-color);
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    :root[replace-scrollbar="null"] {
      ::-webkit-scrollbar {
        width: 8px;
        background-color: rgba(0, 0, 0, 0);
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0);
      }
    }

    /* -- SCROLLBAR -- */
    /* src: https://gist.github.com/devinrhode2/2573411 */
    :root[replace-scrollbar="true"] {
      ::-webkit-scrollbar {
        width: 8px;
        background-color: rgba(0, 0, 0, 0);
        -webkit-border-radius: 100px;
      }
      ::-webkit-scrollbar:hover {
        background-color: rgba(0, 0, 0, 0.09);
      }
      ::-webkit-scrollbar-thumb:vertical {
        background: rgba(0, 0, 0, 0.5);
        -webkit-border-radius: 100px;
      }
      ::-webkit-scrollbar-thumb:vertical:active {
        background: rgba(0, 0, 0, 0.61);
        -webkit-border-radius: 100px;
      }
    }
  }
`;
