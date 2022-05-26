import { render, screen } from '@testing-library/react';
import { Pokemon } from '.';
import '@testing-library/jest-dom';
import { useDifficultyMode } from '../../hooks/useDifficultyMode';

const selectedPokemon = {
  dexNumber: 25,
  name: {
    romaji: 'Pikachū',
    katakana: 'ピカチュウ',
  },
  artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
}
const mockedDifficultyMode = useDifficultyMode as jest.Mock;

jest.mock('../../hooks/useDifficultyMode');

describe('Pokemon', () => {
  beforeEach(() => {
    mockedDifficultyMode.mockImplementation(() => {
      return {
        hardMode: false,
        changeDifficultyMode: () => {}
      }
    });
  });

  it('renders correctly', () => {
    render(
      <Pokemon
        selectedPokemon={selectedPokemon}
        showAnswer={false}
        playerAnswer={''}
        isAnswerRight={false}
        isLoading={false}
        setIsLoading={() => {}}
      />
    )
    
    expect(screen.getByText('ピカチュウ')).toBeInTheDocument()
  })

  it('renders loading component', () => {
    render(
      <Pokemon
        selectedPokemon={selectedPokemon}
        showAnswer={false}
        playerAnswer={''}
        isAnswerRight={false}
        isLoading={true}
        setIsLoading={() => {}}
      />
    )
    
    expect(screen.queryByText('ピカチュウ')).not.toBeInTheDocument()
  })

  it('shows romaji if answer is wrong', () => {
    render(
      <Pokemon
        selectedPokemon={selectedPokemon}
        showAnswer={true}
        playerAnswer={''}
        isAnswerRight={false}
        isLoading={false}
        setIsLoading={() => {}}
      />
    )
    
    expect(screen.getByText('Pikachū')).toBeInTheDocument()
    expect(screen.getByText('You typed:')).toBeInTheDocument()
    expect(screen.queryByText('Success!')).not.toBeInTheDocument()
  })

  it('shows success message', () => {
    render(
      <Pokemon
        selectedPokemon={selectedPokemon}
        showAnswer={true}
        playerAnswer={''}
        isAnswerRight={true}
        isLoading={false}
        setIsLoading={() => {}}
      />
    )
    
    expect(screen.getByText('Success!')).toBeInTheDocument()
    expect(screen.queryByText('You typed:')).not.toBeInTheDocument()
  })

  it('shows placeholder artwork in Hard Mode', () => {
    mockedDifficultyMode.mockImplementation(() => {
      return {
        hardMode: true,
        changeDifficultyMode: () => {}
      }
    });

    render(
      <Pokemon
        selectedPokemon={selectedPokemon}
        showAnswer={false}
        playerAnswer={''}
        isAnswerRight={false}
        isLoading={false}
        setIsLoading={() => {}}
      />
    )

    expect(screen.getByAltText('?')).toBeInTheDocument()
  })
})