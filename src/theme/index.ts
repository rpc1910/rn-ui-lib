import type { DefaultTheme } from 'styled-components/native';

import themeA from './theme-a';
import themeB from './theme-b';

export default function getThemeByIssuer(name: string): DefaultTheme {
  switch (name) {
    case 'themeA':
      return themeA;
    case 'themeB':
      return themeB;
    default:
      return themeA;
  }
}
