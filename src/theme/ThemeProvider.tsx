import { Theme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { createContext, useEffect, useState } from 'react';

import { themeCreator } from './base';
import i18n from '../i18n';
import { CustomTheme } from './schemes/CustomTheme';

interface ThemeContextType {
  theme: Theme;
  setThemeName: (_themeName: string) => void;
}

// TODO: 不明
export const ThemeContext = createContext<ThemeContextType>({
  theme: CustomTheme,
  setThemeName: (_themeName: string) => 'CustomTheme',
});

interface ThemeProviderProps {
  lang?: 'en' | 'ja';
  children: React.ReactNode;
}

const ThemeProviderWrapper = ({
  lang = 'ja',
  children,
}: ThemeProviderProps) => {
  const [themeName, _setThemeName] = useState('CustomTheme');

  useEffect(() => {
    const curThemeName = 'CustomTheme';
    _setThemeName(curThemeName);
  }, []);

  useEffect(() => {
    // change language
    i18n.changeLanguage(lang);
  }, [lang]);

  const theme = themeCreator(themeName);

  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={{ theme, setThemeName }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
