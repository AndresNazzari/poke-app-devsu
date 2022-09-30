import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { FetchState } from '../../constants/fetchState';
export const initialState = {
  pokemons: null,
  pokemonsFiltered: null,
  pokemon: null,
  fetchState: FetchState.NOT_FETCHED,
  error: null,
};

export const pokemonSlice = createSlice({
  name: 'pokemonReducer',
  initialState: initialState,
  reducers: {
    loadPokemons: (state, action) => {
      return { ...state, pokemons: action.payload, pokemonsFiltered: action.payload };
    },
    setFilteredPokemons: (state, action) => {
      return { ...state, pokemonsFiltered: action.payload };
    },
    loadPokemon: (state, action) => {
      return { ...state, pokemon: action.payload };
    },
    deletePokemon: (state, action) => {
      return {
        ...state,
        pokemons: state.pokemons.filter((pokemon) => pokemon.id !== action.payload),
        pokemonsFiltered: state.pokemons.filter((pokemon) => pokemon.id !== action.payload),
      };
    },
    addPokemon: (state, action) => {
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        pokemonsFiltered: [...state.pokemons, action.payload],
      };
    },
    updatePokemonAction: (state, action) => {
      return {
        ...state,
        pokemons: state.pokemons.map((pokemon) =>
          pokemon.id === action.payload.id ? { ...pokemon, ...action.payload } : pokemon
        ),
        pokemonsFiltered: state.pokemonsFiltered.map((pokemon) =>
          pokemon.id === action.payload.id ? { ...pokemon, ...action.payload } : pokemon
        ),
      };
    },
    clearPokemon: (state) => {
      return { ...state, pokemon: null };
    },

    setPokemonFetching: (state) => {
      return { ...state, fetchState: FetchState.FETCHING };
    },
    setPokemonFetched: (state) => {
      return { ...state, fetchState: FetchState.FETCHED };
    },
    setError: (state, action) => {
      return { ...state, error: action.payload };
    },
  },
});

export const {
  loadPokemons,
  loadPokemon,
  deletePokemon,
  addPokemon,
  updatePokemonAction,
  clearPokemon,
  setFilteredPokemons,
  setPokemonFetched,
  setPokemonFetching,
  setError,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
