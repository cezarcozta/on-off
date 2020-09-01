import React, { useCallback, useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from '../styles/global';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
