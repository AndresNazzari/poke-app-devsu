import React from 'react';
import styles from '../../Search/styles/Search.module.scss';

const MagniGlass = () => {
  return (
    <svg
      fill='none'
      viewBox='0 0 20 20'
      strokeWidth={1.5}
      stroke='currentColor'
      className={`${styles.inputIcon} w-6 h-6`}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
      />
    </svg>
  );
};

export default MagniGlass;
