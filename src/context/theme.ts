import * as React from 'react';

export const DARK_THEME = 'dark';

export const LIGHT_THEME = 'light';

export const DEFAULT_THEME = DARK_THEME;

export const ThemeContext = React.createContext({theme: DEFAULT_THEME})