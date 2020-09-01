import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import dark from '../styles/dark';
import light from '../styles/light';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
