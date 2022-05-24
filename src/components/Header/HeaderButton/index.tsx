import { ReactNode } from 'react';
import './styles.scss';

interface HeaderButtonProps {
  handleClick: () => void;
  children: ReactNode;
}

export function HeaderButton({ handleClick, children }: HeaderButtonProps) {
  return (
    <button
      data-testid="header-button"
      className="header-button"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}