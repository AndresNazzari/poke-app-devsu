import {
  loadPokemons,
  loadPokemon,
  deletePokemon,
  updatePokemonAction,
  addPokemon,
  clearPokemon,
  setFilteredPokemons,
  setPokemonFetched,
  setPokemonFetching,
  setError,
} from '../states/pokemon.state';
import Endpoints from '../../constants/endpoints';
import axios from 'axios';

export const loadPokemonsAction = () => async (dispatch) => {
  const idAuthor = sessionStorage.getItem('idAuthor');
  dispatch(setPokemonFetching());
  try {
    const res = await axios.get(Endpoints.GET_POKEMONS, { params: { idAuthor } });
    dispatch(loadPokemons(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setPokemonFetched());
  }
};

export const loadPokemonAction = (id) => async (dispatch) => {
  dispatch(setPokemonFetching());
  try {
    const res = await axios.get(`${Endpoints.GET_POKEMON}${id}`);

    dispatch(loadPokemon(res.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setPokemonFetched());
  }
};

export const deletePokemonAction = (id) => async (dispatch) => {
  dispatch(setPokemonFetching());
  try {
    const res = await axios.delete(`${Endpoints.DELETE_POKEMON}${id}`);
    dispatch(deletePokemon(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setPokemonFetched());
  }
};

export const savePokemonAction = (pokemon, edit) => async (dispatch) => {
  dispatch(setPokemonFetching());
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify(pokemon);
    if (edit) {
      const res = await axios.put(`${Endpoints.PUT_POKEMON}${pokemon.id}`, body, config);
      dispatch(updatePokemonAction(pokemon));
    } else {
      const res = await axios.post(`${Endpoints.POST_POKEMON}`, body, config);
      dispatch(addPokemon(res.data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setPokemonFetched());
  }
};

export const clearPokemonAction = () => async (dispatch) => {
  dispatch(clearPokemon());
};

export const setFilteredPokemonsAction = (pokemons) => async (dispatch) => {
  dispatch(setFilteredPokemons(pokemons));
};
