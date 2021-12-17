import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';
import { mergeTheme } from './theme';

type IThemeLibProviderProps = {
  children: any;
  theme?: DefaultTheme;
};

function ThemeLibProvider({ children, theme }: IThemeLibProviderProps) {
  const mergedTheme = mergeTheme(theme);

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>;
}

export default ThemeLibProvider;
