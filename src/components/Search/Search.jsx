import React, { useEffect } from 'react';
import styles from './styles/Search.module.scss';
import { MagniGlass } from '../Icons';
import { useSelector } from 'react-redux';
import { setFilteredPokemonsAction } from '../../redux/actions/pokemon.actions';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonReducer.pokemons);

  useEffect(() => {
    dispatch(setFilteredPokemonsAction(pokemons));
  }, []);

  const onChangeHandler = (e) => {
    e.target.value == ''
      ? dispatch(setFilteredPokemonsAction(pokemons))
      : dispatch(
          setFilteredPokemonsAction(
            pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))
          )
        );
  };

  return (
    <div className={styles.search}>
      <input type='text' className={styles.input} placeholder='Buscar' onChange={(e) => onChangeHandler(e)} />
      <MagniGlass />
    </div>
  );
};

export default Search;
