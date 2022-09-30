import React from 'react';
import styles from './styles/FormSlider.module.scss';

const FormSlider = ({ text, name, value, onChangeHandler }) => {
  return (
    <div className={styles.formSlider}>
      <div className={styles.container}>
        <label htmlFor={name}>{text}</label>
        <div className={styles.sliderContainer}>
          <span>0</span>
          <input
            type='range'
            min='1'
            max='100'
            id='defRange'
            name={name}
            value={value}
            className={styles.slider}
            valueAsNumber={50}
            // defaultValue='50'
            onChange={(e) => onChangeHandler(e)}
            readOnly={false}
          />
          <span>100</span>
        </div>
      </div>
    </div>
  );
};

export default FormSlider;
