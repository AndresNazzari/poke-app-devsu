import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setUserAction } from '../redux/actions/user.actions';
const AppContext = createContext();

export const { Provider } = AppContext;

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserAction());
  }, [dispatch]);

  const contextValue = {};
  return <Provider value={contextValue}>{children}</Provider>;
};

export default AppContextProvider;
