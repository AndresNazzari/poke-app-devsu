import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import styles from './styles/Home.module.scss';
import { loadPokemonsAction } from '../../redux/actions/pokemon.actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPokemonsAction());
  }, []);

  return (
    <main className={styles.home}>
      <h2>Listado de Pokemon</h2>
      <Header />
      <Table />

      <Outlet />
    </main>
  );
};

export default Home;
