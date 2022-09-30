import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../constants/fetchState';

export const initialState = { user: {}, fetchState: FetchState.NOT_FETCHED, error: null };

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    setUserFetching: (state) => {
      return { ...state, fetchState: FetchState.FETCHING };
    },
    setUserFetched: (state) => {
      return { ...state, fetchState: FetchState.FETCHED };
    },
  },
});

export const { setUser, setUserFetching, setUserFetched } = userSlice.actions;

export default userSlice.reducer;
