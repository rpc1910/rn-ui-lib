import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import getThemeByIssuer from './theme';

type IThemeLibProviderProps = {
  children: any;
  issuer?: 'themeA' | 'themeB';
};

function ThemeLibProvider({
  children,
  issuer = 'themeA',
}: IThemeLibProviderProps) {
  const theme = getThemeByIssuer(issuer);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeLibProvider;
