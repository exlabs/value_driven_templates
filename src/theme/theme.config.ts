import { ThemedStyledProps } from 'styled-components';

export type Colors =
  | 'primary'
  | 'dark-primary'
  | 'red'
  | 'dark-red'
  | 'white'
  | 'black';

export type FontFamilies = 'primary' | 'secondary';

export type PaddingSize = 'small' | 'big';

export type FontSize = 'small' | 'medium' | 'big';

export interface Theme {
  color: { [key in Colors]: string };
  fontFamily: { [key in FontFamilies]: string };
  padding: { [key in PaddingSize]: string };
  fontSize: { [key in FontSize]: string };
  defaultRadius: string;
  transitionValue: (value: string) => string;
}

export type ThemeProps<T = {}> = ThemedStyledProps<T, Theme>;

export const theme: Theme = {
  color: {
    primary: '#044aaf',
    'dark-primary': '#03399e',
    red: '#ff3e5b',
    white: '#ffffff',
    'dark-red': '#ee2d4a',
    black: '#3D3B3C',
  },
  fontFamily: {
    primary: 'Montserrat',
    secondary: 'Open Sans',
  },
  padding: {
    small: '20px',
    big: '40px',
  },
  fontSize: {
    big: '31px',
    medium: '17px',
    small: '14px',
  },
  defaultRadius: '4px',
  transitionValue: (value: string) => `${value} 0.3s ease`,
};
