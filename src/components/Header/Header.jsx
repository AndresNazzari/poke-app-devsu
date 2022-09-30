import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/Header.module.scss';
import Button from '../Button/Button';
import Search from '../Search/Search';
import { Plus } from '../Icons/Plus';
import { loadPokemonAction } from '../../redux/actions/pokemon.actions';
const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/crear', { state: { edit: false } });
  };

  return (
    <div className={styles.header}>
      <Search />
      <Button icon={<Plus />} onClickHandler={onClickHandler}>
        Nuevo
      </Button>
    </div>
  );
};

export default Header;
