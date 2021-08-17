import { globals } from '../styles/global';
import { AppProps } from 'next/app';
import { useColorTheme } from '../styles/colors';
import { Nav } from '../components/nav/nav';

globals; // needs to be imported on every page
const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const [theme, setTheme] = useColorTheme();
  return (
    <>
      <Nav theme={theme} setTheme={setTheme}/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
