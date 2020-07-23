import React from 'react';

import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ToggleContainer } from './styles';

interface ToggleProps {
  theme: string;
  toggleTheme(): void;
}

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer isLight={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;
