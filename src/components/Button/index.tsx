import { InputHTMLAttributes } from "react";
import './styles.scss';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type?: string;
  placeholder: string;
}

export function Button({ placeholder, type, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`customized-button ${type}`}
    >
      {placeholder}
    </button>
  )
}