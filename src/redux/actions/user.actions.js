import { setUser, setUserFetching, setUserFetched } from '../states/user.state';

export const setUserAction = (user) => async (dispatch) => {
  dispatch(setUserFetching());
  sessionStorage.setItem('idAuthor', 1620);
  //aca se simularia el login
  if (sessionStorage.getItem('idAuthor')) {
    dispatch(setUser({ idAuthor: sessionStorage.getItem('idAuthor') }));
  } else {
    sessionStorage.setItem('idAuthor', 1620);
  }
  dispatch(setUserFetched());
};
