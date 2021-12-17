import type { DefaultTheme } from 'styled-components/native';
import defaultTheme from './default';

export function mergeTheme(theme: DefaultTheme | undefined): DefaultTheme {
  return {
    colors: {
      ...defaultTheme.colors,
      ...theme?.colors,
    },
    fonts: {
      ...defaultTheme.fonts,
      ...theme?.fonts,
    },
  };
}
