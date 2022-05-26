import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { mocked } from 'jest-mock'
import '@testing-library/jest-dom';
import { GameScreen } from '.';
import { randomNumberGenerator } from '../../utils/randomNumberGenerator';
import { fetchPokemonGeneralData, fetchPokemonSpeciesData } from '../../services/pokemonDataServices';

const fetchPokemonGeneralDataMocked = fetchPokemonGeneralData as jest.Mock;
const fetchPokemonSpeciesDataMocked = fetchPokemonSpeciesData as jest.Mock;
const mockedRandomNumberGenerator = mocked(randomNumberGenerator);

jest.mock('../../utils/randomNumberGenerator');
jest.mock('../../services/pokemonDataServices');

describe('GameScreen', () => {
  beforeEach(async () => {
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

  it('shows "Success!" when user submits a right answer', async () => {
    render(
      <GameScreen />
    )

    await waitFor(() => {
      return expect(screen.getByText('ピカチュウ')).toBeInTheDocument();
    })

    const input = screen.getByPlaceholderText('Who is that Pokémon?');
    fireEvent.change(input, {target: {value: 'Pikachū'}})

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton)
    expect(screen.getByText('Success!')).toBeInTheDocument();
  })

  it('shows "You typed" when user submits a wrong answer', async () => {
    render(
      <GameScreen />
    )


    await waitFor(() => {
      return expect(screen.getByText('ピカチュウ')).toBeInTheDocument();
    })

    const input = screen.getByPlaceholderText('Who is that Pokémon?');
    fireEvent.change(input, {target: {value: 'Raichū'}})

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(screen.getByText('Pikachū')).toBeInTheDocument();
    expect(screen.getByText('You typed: Raichū')).toBeInTheDocument();
  })

  it('changes to a different Pokémon when user presses "Next"', async () => {
    render(
      <GameScreen />
    )

    await waitFor(() => {
      return expect(screen.getByText('ピカチュウ')).toBeInTheDocument();
    })

    mockedRandomNumberGenerator.mockReturnValueOnce(26);

    fetchPokemonGeneralDataMocked.mockImplementation(() => {
      return {
        officialArtwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png'
      };
    })
    
    fetchPokemonSpeciesDataMocked.mockImplementation(() => {
      return {
        katakanaName: 'ライチュウ'
      };
    })
   
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    await waitFor(() => {
      return expect(screen.getByText('ライチュウ')).toBeInTheDocument();
    })
    
    expect(screen.queryByText('ピカチュウ')).not.toBeInTheDocument();
  })
})