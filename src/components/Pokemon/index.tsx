import { useEffect } from 'react';
import { Loading } from '../Loading';
import PlaceholderArtwork from './img/artworkPlaceholder.png';
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
  
  const checkGameMode = () => {
    console.log(showAnswer)
    return (localStorage.getItem('@pokekana-hard-mode') === 'false' || showAnswer)
      ? selectedPokemon.artwork
      : 'https://64.media.tumblr.com/3cd57bc4e13df49261eadac4f462bbff/3293d9c615ed5031-c0/s540x810/6dc2ab3e9492fb3becae033cd011d622aaf029ab.png'
  }

  return (
    <>
      {isLoading
        ? <Loading />
        : (
        <div className="pokemon-container">
          <img
            src={checkGameMode()}
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