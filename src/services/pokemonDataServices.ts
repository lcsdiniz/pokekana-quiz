import { GeneralPokemonData, SpeciesData } from "../types/pokemonServicesTypes";
import { JAPANESE_LANGUAGE_IDS } from "../utils/constants";
import { api } from "./api";

export const fetchPokemonGeneralData = async (pokemonDexNumber: number): Promise<GeneralPokemonData> => {
  const { data } = await api.get(`pokemon/${pokemonDexNumber}`);

  const generalData = {
    officialArtwork: data.sprites.other['official-artwork'].front_default
  }

  return generalData;
} 

export const fetchPokemonSpeciesData = async (pokemonDexNumber: number): Promise<SpeciesData> => {
  const { data } = await api.get(`pokemon-species/${pokemonDexNumber}`);

  const speciesData = {
    katakanaName: data.names.find(
      (languageName: any) => JAPANESE_LANGUAGE_IDS.includes(languageName.language.name)
    ).name
  }

  return speciesData;
} 