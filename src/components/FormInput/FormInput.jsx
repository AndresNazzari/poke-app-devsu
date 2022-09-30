import React from 'react';
import styles from './styles/FormInput.module.scss';

const FormInput = ({ text, name, value, placeholder, onChangeHandler }) => {
  return (
    <div className={styles.formInput}>
      <div className={styles.container}>
        <label htmlFor={name}>{text}</label>
        <input type='text' placeholder={placeholder} name={name} value={value} onChange={(e) => onChangeHandler(e)} />
      </div>
    </div>
  );
};

export default FormInput;
