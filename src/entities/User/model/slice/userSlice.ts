import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_TOKEN } from 'shared/constants';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LOCALSTORAGE_TOKEN);

      if (userData) {
        state.authData = JSON.parse(userData);
      }

      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_TOKEN);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
