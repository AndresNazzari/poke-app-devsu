import React from 'react';
import styles from './styles/NotFound.module.scss';
import char from './char.gif';

const NotFound = () => {
  return (
    <thead>
      <tr>
        <th className={styles.notFound}>
          <span> No se encontraron pokemones</span>
          <img src={char} alt='' />
        </th>
      </tr>
    </thead>
  );
};

export default NotFound;
