import { createContext, ReactNode, useContext, useState } from 'react';

interface DifficultyModeProps {
  children: ReactNode;
}

interface DifficultyModeData {
  hardMode: boolean;
  changeDifficultyMode: () => void;
}

const DifficultyModeContext = createContext<DifficultyModeData>({} as DifficultyModeData);

export function DifficultyModeProvider({ children }: DifficultyModeProps): JSX.Element {
  const [hardMode, setHardMode] = useState(() => {
    return localStorage.getItem('@pokekana-hard-mode') === 'false' || localStorage.getItem('@pokekana-hard-mode') === null ? false : true;
  })

  const changeDifficultyMode = () => {
    setHardMode(!hardMode);
    localStorage.setItem('@pokekana-hard-mode', String(!hardMode));
  }

  return (
    <DifficultyModeContext.Provider
      value={{ hardMode, changeDifficultyMode }}
    >
      {children}
    </DifficultyModeContext.Provider>
  );
}

export function useDifficultyMode(): DifficultyModeData {
  const context = useContext(DifficultyModeContext);

  return context;
}
