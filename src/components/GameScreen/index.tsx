import { useCallback, useEffect, useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { Pokemon } from '../Pokemon';
import { fetchPokemonGeneralData, fetchPokemonSpeciesData } from '../../services/pokemonDataServices';
import { checksStringEquality } from '../../utils/checksStringEquality';
import { randomNumberGenerator } from '../../utils/randomNumberGenerator';
import { pokemonNamesWithHepburn } from '../../utils/pokemonNamesWithHepburn';
import { CIRCUNFLEXED_CHARACTERS } from '../../utils/constants';
import { changeToMacron } from '../../utils/changeToMacron';

export function GameScreen() {
  const [pokemonRomajiName, setPokemonRomajiName] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState({
    dexNumber: 0,
    name: {
      romaji: '',
      katakana: '',
    },
    artwork: ''
  });
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemonData = async (randomNumber: number) => {
    setIsLoading(true);

    const generalData = await fetchPokemonGeneralData(randomNumber);
    const speciesData = await fetchPokemonSpeciesData(randomNumber);
    setSelectedPokemon({
      dexNumber: randomNumber,
      name: {
        romaji: pokemonNamesWithHepburn.pokemonList[randomNumber - 1].japaneseHepburn,
        katakana: speciesData.katakanaName,
      },
      artwork: generalData.officialArtwork,
    });

    setIsLoading(false);
  } 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typedCharacter = event.target.value.slice(-1);
    if(CIRCUNFLEXED_CHARACTERS.includes(typedCharacter)) {
      const changedCharacter = changeToMacron(typedCharacter);

      setPokemonRomajiName(event.target.value.replace(/.$/, changedCharacter));
    } else {
      setPokemonRomajiName(event.target.value);
    }
  }

  const handleReset = useCallback(() => {
    setPokemonRomajiName('');
    setShowAnswer(false);
    fetchPokemonData(
      randomNumberGenerator()
    );

    setTimeout(() => {
      document!.getElementById("input")!.focus();
    }, 100);
  }, []);

  const handleCheckAnswer = useCallback(() => {
    setShowAnswer(true);

    const userGotItRight = checksStringEquality(pokemonRomajiName, selectedPokemon.name.romaji);
    
    setIsAnswerRight(userGotItRight);
    
    userGotItRight && setTimeout(() => {
      handleReset();
    }, 1500);
  }, [handleReset, pokemonRomajiName, selectedPokemon.name.romaji]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && pokemonRomajiName) {
      handleCheckAnswer();
    };
  }, [handleCheckAnswer, pokemonRomajiName]);

  useEffect(() => {
    fetchPokemonData(
      25
    );
  }, []);

  return(
    <main className="main-content" data-testid="main-content">
      <Pokemon
        selectedPokemon={selectedPokemon}
        showAnswer={showAnswer}
        playerAnswer={pokemonRomajiName}
        isAnswerRight={isAnswerRight}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      
      <Input
        value={pokemonRomajiName}
        placeholder="Who is that Pokémon?"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        disabled={showAnswer}
        autoFocus
      />

      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* <Button
          onClick={handleReset}
          placeholder="Pass"
          type="pass"
        /> */}

        <Button
          onClick={handleReset}
          placeholder="Next"
          type="next"
        />

        <Button
          onClick={handleCheckAnswer}
          disabled={(!pokemonRomajiName || showAnswer)}
          placeholder="Submit"
          type="submit"
        />
      </div>
    </main>
  )
}