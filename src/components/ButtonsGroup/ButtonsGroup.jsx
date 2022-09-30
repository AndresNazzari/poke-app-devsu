import React from 'react';
import styles from './styles/ButtonsGroup.module.scss';
import Button from '../Button/Button';
const ButtonsGroup = ({ children }) => {
  return (
    <>
      <div className={styles.buttonsGroup}>
        {children.map((obj, i) => {
          return (
            <div className={styles.btn} key={i}>
              <Button icon={obj.icon} onClickHandler={obj.onClickHandler} disabled={obj.disabled}>
                {obj.text}
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ButtonsGroup;
