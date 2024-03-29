import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config';
import { Profile } from '../../types';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Profile>(`profile/${profileId}`);

      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue('error');
    }
  },
);
