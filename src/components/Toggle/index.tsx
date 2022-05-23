import { useState } from 'react';
import { useDifficultyMode } from '../../hooks/useDifficultyMode';
import './styles.scss';

export function Toggle() {
  const { hardMode, changeDifficultyMode } = useDifficultyMode();
  const [isToggled, setIsToggled] = useState(hardMode);
  
  const handleToggle = () => {
    changeDifficultyMode();
    setIsToggled(!isToggled);
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>

  )
}