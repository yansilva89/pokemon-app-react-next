import type { AppProps } from 'next/app';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/defaults/globalstyles';
import { store } from '../store/index';

const theme: DefaultTheme = {
  colors: {
    primary: '#00D68F',
    primaryDark: '#004A45',
    primaryTransparent: 'rgba(0, 214, 143, 0.48)',
    action: '#FF3D71',
    actionDark: '#DB2C66',
    white: '#FFFFFF',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
