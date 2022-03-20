import { useState } from 'react';
import './styles.scss';

export function Toggle() {
  const [isToggled, setIsToggled] = useState(() => {
    return localStorage.getItem('@pokekana-hard-mode') === 'true' ? true : false
  });

  const handleToggle = () => {
    localStorage.setItem('@pokekana-hard-mode', String(!isToggled));
    setIsToggled(!isToggled);
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>

  )
}