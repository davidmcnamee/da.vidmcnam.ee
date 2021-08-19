import { globals } from '../styles/global';
import { AppProps } from 'next/app';
import { useColorTheme } from '../styles/colors';
import { Nav } from '../components/nav/nav';
import { useEffect } from "react";
import Script from 'next/script';

globals; // needs to be imported on every page
const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const [theme, setTheme] = useColorTheme();
  useEffect(() => {
    document.documentElement.setAttribute("replace-scrollbar", (navigator.platform.includes('Win') || navigator.platform.includes('Linux')).toString());
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
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault();

                  document.querySelector(this.getAttribute('href')).scrollIntoView({
                      behavior: 'smooth'
                  });
              });
          });
        `}
      </Script>
      <Nav theme={theme} setTheme={setTheme}/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
