import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider/config';
import { Profile } from '../../types';
import { getProfileForm } from '../../selectors';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const {
      extra, getState, rejectWithValue,
    } = thunkApi;
    const formData = getProfileForm(getState() as StateSchema);

    try {
      const response = await extra.api.put<Profile>('/profile', formData);

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue('error');
    }
  },
);
