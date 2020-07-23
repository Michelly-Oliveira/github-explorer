import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks/useTheme';
import Toggle from './ToggleButton';

import { lightTheme, darkTheme } from '../styles/themes';

const Theme: React.FC = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
