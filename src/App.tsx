import { Header } from './components/Header';
import { GameScreen } from './components/GameScreen';
import { DifficultyModeProvider } from './hooks/useDifficultyMode';
import './styles/global.scss';

function App() {
  return (
    <DifficultyModeProvider>
      <Header />
      <GameScreen />
    </DifficultyModeProvider>
  );
}

export default App;
