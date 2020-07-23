import { useState } from 'react';

interface ThemeContextData {
  theme: string;
  toggleTheme(): void;
}

export const useTheme = (): ThemeContextData => {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem('@GithubExplorer:theme');

    if (storageTheme) {
      localStorage.setItem('@GithubExplorer:theme', storageTheme);
      return storageTheme;
    }

    localStorage.setItem('@GithubExplorer:theme', 'light');
    return 'light';
  });

  const setMode = (mode: string) => {
    localStorage.setItem('@GithubExplorer:theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return { theme, toggleTheme };
};
