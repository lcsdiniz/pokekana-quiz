import { LAST_POKEDEX_NUMBER } from './constants';

export function randomNumberGenerator() {
  return Math.floor(Math.random() * (LAST_POKEDEX_NUMBER)) + 1;
}