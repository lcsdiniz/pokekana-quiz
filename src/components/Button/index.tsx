import { InputHTMLAttributes, memo } from "react";
import './styles.scss';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type?: string;
  placeholder: string;
}

function ButtonComponent({ placeholder, type, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`customized-button ${type}`}
    >
      {placeholder}
    </button>
  )
};

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.placeholder, nextProps.placeholder) && Object.is(prevProps.disabled, nextProps.disabled) && Object.is(prevProps.onClick, nextProps.onClick)
})