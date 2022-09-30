import React from 'react';
import styles from './styles/TableRow.module.scss';
import imgPlaceholder from '../Table/assets/noimg.png';
import { Edit, Delete } from '../Icons';

const TableRow = ({ pokemon, handleEdit, handleDelete }) => {
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td className={styles.imgCell}>
        <img src={pokemon.image || imgPlaceholder} alt='' />
      </td>
      <td>{pokemon.attack}</td>
      <td>{pokemon.defense}</td>
      <td>
        <div>
          <button onClick={() => handleEdit(pokemon.id)}>
            <Edit />
          </button>
          <button onClick={() => handleDelete(pokemon.id)}>
            <Delete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
