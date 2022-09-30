import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user.state';
import { pokemonSlice } from './states/pokemon.state';

export default configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    pokemonReducer: pokemonSlice.reducer,
  },
});
