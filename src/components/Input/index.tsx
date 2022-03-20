import { InputHTMLAttributes } from 'react';
import './styles.scss';

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id='input'
      className='customized-input'
      autoComplete="off"
      {...rest}
    />
  )
}