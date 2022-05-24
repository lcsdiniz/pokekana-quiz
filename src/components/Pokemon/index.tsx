import { useDifficultyMode } from '../../hooks/useDifficultyMode';
import { Loading } from '../Loading';
import PlaceholderArtwork from '../../assets/artworkPlaceholder.png';
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
  
  const getArtworkData = (): { src: string, alt: string } => {
    return (hardMode && !showAnswer)
      ? { src: PlaceholderArtwork, alt: "?" }
      : { src: selectedPokemon.artwork, alt: selectedPokemon.name.katakana }
  };

  return (
    <>
      
        <div className="pokemon-container">
          <div className='loaded-info'>
            {isLoading
              ? <Loading />
              : (
                <>
                  <div className='img-container'>
                    <img
                      src={getArtworkData().src}
                      alt={getArtworkData().alt}
                      onLoad={() => {
                        setIsLoading(false)
                      }}
                    />
                  </div>
                  <h1 className='katakana'>{selectedPokemon.name.katakana}</h1>  
                </>
              )
            }
          </div>
              
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
    </>
  )
}