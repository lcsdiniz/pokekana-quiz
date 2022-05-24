import { render, screen, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock'
import '@testing-library/jest-dom';
import { GameScreen } from '.';
import { randomNumberGenerator } from '../../utils/randomNumberGenerator';
import { fetchPokemonGeneralData, fetchPokemonSpeciesData } from '../../services/pokemonDataServices';

const fetchPokemonGeneralDataMocked = fetchPokemonGeneralData as jest.Mock;
const fetchPokemonSpeciesDataMocked = fetchPokemonSpeciesData as jest.Mock;

jest.mock('../../utils/randomNumberGenerator');
jest.mock('../../services/pokemonDataServices');

describe('GameScreen component', () => {
  beforeEach(async () => {
    const mockedRandomNumberGenerator = mocked(randomNumberGenerator);
    mockedRandomNumberGenerator.mockReturnValueOnce(25);
    
    fetchPokemonGeneralDataMocked.mockImplementation(() => {
      return {
        officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
      };
    })
    
    fetchPokemonSpeciesDataMocked.mockImplementation(() => {
      return {
        katakanaName: 'ピカチュウ'
      };
    })
  })

  it('shows loading component', () => {
    render(
      <GameScreen />
    )
    
    expect(screen.getByText('Loading')).toBeInTheDocument();
  })

  it('shows pokémon data after fetch', async () => {
    render(
      <GameScreen />
    )
    await waitFor(() => {
      return expect(screen.getByText('ピカチュウ')).toBeInTheDocument();
    })
  })
})