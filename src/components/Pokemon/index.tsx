import { useDifficultyMode } from '../../hooks/useDifficultyMode';
import { Loading } from '../Loading';
import PlaceholderArtwork from './artworkPlaceholder.png';
import './styles.scss';

interface PokemonProps {
  selectedPokemon: {
    dexNumber: number;
    name: {
      romaji: string;
      katakana: string;
    };
    artwork: string;
  }
  showAnswer: boolean;
  playerAnswer: string;
  isAnswerRight: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Pokemon({
  selectedPokemon,
  showAnswer,
  playerAnswer,
  isAnswerRight,
  isLoading,
  setIsLoading,
}: PokemonProps) {
  const { hardMode } = useDifficultyMode();
  
  const getArtwork = () => {
    return (hardMode && !showAnswer)
      ? PlaceholderArtwork
      : selectedPokemon.artwork
  }

  return (
    <>
      {isLoading
        ? <Loading />
        : (
        <div className="pokemon-container">
          <img
            src={getArtwork()}
            alt={selectedPokemon.name.romaji}
            onLoad={() => {
              setIsLoading(false)
            }}
          />
          <h1 className='katakana'>{selectedPokemon.name.katakana}</h1>      
          <div className='feedback-container'>
            {showAnswer && (
              <>
                {isAnswerRight
                  ? <span className='success animate__animated animate__bounce'>Success!</span>
                  : (
                      <div className='answer-container'>
                        <h2>{selectedPokemon.name.romaji}</h2>
                        <p className='error'>You typed: {playerAnswer}</p>
                      </div>
                )}
              </>
            )}   
          </div>
        </div>
        )}
    </>
    
    
  )
}