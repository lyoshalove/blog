import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOCALSTORAGE_TOKEN } from 'shared/constants';
import { User, userActions } from '../../../../../entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/login-by-username',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/login',
        authData,
      );

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_TOKEN, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);

      return thunkAPI.rejectWithValue('error');
    }
  },
);
