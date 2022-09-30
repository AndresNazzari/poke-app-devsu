import React from 'react';
import styles from './styles/Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({ icon, children, onClickHandler, disabled }) => {
  return (
    <div className={!disabled ? `${styles.button}` : `${styles.button} ${styles.disabled}`} onClick={onClickHandler}>
      <div>
        {icon}
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Button;

// navigate('editar', {
//   state: {
//     title: 'Editar Categoría',
//     fields: { name, description },
//     options: { method: 'put', url: `/categories/${id}` },
//     from: location,
//   },
// });
