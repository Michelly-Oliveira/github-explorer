import styled from 'styled-components';

interface ButtonProps {
  isLight: boolean;
}

export const ToggleContainer = styled.button<ButtonProps>`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  border-radius: 25px;

  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  background: ${props => props.theme.toggleBg};
  border: 1px solid ${props => props.theme.toggleBorder};

  svg {
    height: auto;
    width: 20px;
    transition: all 0.3s linear;

    /* sun icon */
    &:first-child {
      transform: ${props =>
        props.isLight ? 'translateY(0)' : 'translateY(100px)'};
    }

    /* moon icon */
    &:nth-child(2) {
      transform: ${props =>
        props.isLight ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
