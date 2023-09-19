import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_TOKEN } from 'shared/constants';
import { ThunkConfig } from 'app/providers/StoreProvider/config';
import { User, userActions } from '../../../../../entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig>(
  'login/login-by-username',
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.post(
        'login',
        authData,
      );

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_TOKEN, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue('error');
    }
  },
);
