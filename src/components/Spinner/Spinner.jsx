import React from 'react';
import styles from './styles/Spinner.module.scss';
import pika from './loading.gif';
const Spinner = () => {
  return (
    <thead>
      <tr>
        <th className={styles.spinner}>
          <span> Loading...</span>
          <img src={pika} alt='' />
        </th>
      </tr>
    </thead>
  );
};

export default Spinner;
