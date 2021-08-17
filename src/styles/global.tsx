import { css } from 'linaria';
import { darkTheme, lightTheme } from './colors';

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
      font-family: 'Poppins', sans-serif;
      box-sizing: border-box;
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
  }
`;
