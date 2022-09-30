import React, { useEffect } from 'react';
import styles from './styles/Table.module.scss';
import TableRow from '../TableRow/TableRow';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';
import { deletePokemonAction, loadPokemonAction } from '../../redux/actions/pokemon.actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemons = useSelector((state) => state.pokemonReducer.pokemonsFiltered);

  const handleDelete = (id) => {
    dispatch(deletePokemonAction(id));
    navigate('/');
  };

  const handleEdit = (id) => {
    dispatch(loadPokemonAction(id));
    navigate('/editar', { state: { edit: true } });
  };

  return (
    <div className={styles.table}>
      <table>
        {!pokemons ? (
          <Spinner />
        ) : pokemons.length > 0 ? (
          <>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pokemons.map((pokemon, i) => {
                return <TableRow key={i} pokemon={pokemon} handleEdit={handleEdit} handleDelete={handleDelete} />;
              })}
            </tbody>
          </>
        ) : (
          <NotFound />
        )}
      </table>
    </div>
  );
};

export default Table;
