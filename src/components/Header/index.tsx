import { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { ConfigModal } from '../Modal/ConfigModal';
import { HelpModal } from '../Modal/HelpModal';
import { HeaderButton } from './HeaderButton';
import './styles.scss';

export function Header() {
  const [isHelpModalOpened, setHelpModalOpened] = useState(false);
  const [isConfigModalOpened, setConfigModalOpened] = useState(false);
  
  return (
    <header className='header'>
      <HeaderButton
        handleClick={() => setHelpModalOpened(true)}
      >
        <span>?</span>
      </HeaderButton>

      <h1 className='title'>PokéKana Quiz</h1>
      
      <HeaderButton
        handleClick={() => setConfigModalOpened(true)}
      >
        <IoMdSettings />
      </HeaderButton>

      <HelpModal
        isModalOpened={isHelpModalOpened}
        closeModal={() => setHelpModalOpened(false)}
      />

      <ConfigModal
        isModalOpened={isConfigModalOpened}
        closeModal={() => setConfigModalOpened(false)}
      />
    </header>   
  )
}