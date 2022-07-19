import { globals } from '../styles/global';
import { AppProps } from 'next/app';
import { lightTheme, useColorTheme } from '../styles/colors';
import { useEffect } from "react";
import Script from 'next/script';

const consoleMsg = `
%cHey there 👋

Good to have you on my website! You're here for source code, I presume? The code here is minified, but here's a link to the original: https://github.com/davidmcnamee/portfolio-site-v3.
This site is built with %cNext.js%c (a React framework) and styled with %clinaria%c (a zero-runtime CSS-in-JS tool). I also make use of %cFeather icons%c, and %creact-spring%c (the animation library that manages the parallax scrolling effect).

Hope that satisfies your appetite. Happy coding!
`.trim();
const consoleVars = [
  "color: green",
  `background: ${lightTheme['--gradient-1']}`,
  `color: green`,
  `background: ${lightTheme['--gradient-2']}`,
  `color: green`,
  `background: ${lightTheme['--gradient-3']}`,
  `color: green`,
  `background: ${lightTheme['--gradient-4']}`,
  `color: green`,
];

globals; // needs to be imported on every page
const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const [theme, setTheme] = useColorTheme();
  useEffect(() => {
    const referrer = document?.referrer ?? null;
    let naturalThemePreference: boolean | string = window?.matchMedia?.('(prefers-color-scheme: light)')?.matches ?? null;
    if(naturalThemePreference === true) naturalThemePreference = 'light';
    else if(naturalThemePreference === false) naturalThemePreference = 'dark';
    const themePreference = window?.localStorage?.getItem?.('color-theme') ?? null;
    fetch('/api/analytics', {
      method: 'POST',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        referrer,
        themePreference,
        naturalThemePreference,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      })
    }).catch(console.error);
    const onClick = (e: MouseEvent) => {
      let cur = e.target as HTMLElement;
      let path =  ""
      while(cur && cur.tagName !== 'body') {
        path = `${cur.tagName}.${cur.className} > ` + path;
        cur = cur.parentElement!;
      }
      fetch('/api/analytics-click', {
        method: 'POST',
        cache: 'no-cache',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ path })
      }).catch(console.error);
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);
  return (
    <>
      <Script strategy="beforeInteractive">
        {`
          var scriptColorTheme = window.localStorage.getItem('color-theme');
          if(scriptColorTheme) document.documentElement.setAttribute('color-theme', scriptColorTheme);
        `}
      </Script>
      <Script strategy="afterInteractive">
        {`
          console.log(\`${consoleMsg}\`, "${consoleVars.join("\",\"")}");
        `}
      </Script>
      <Component {...pageProps} theme={theme}  />
    </>
  );
}

export default App;
