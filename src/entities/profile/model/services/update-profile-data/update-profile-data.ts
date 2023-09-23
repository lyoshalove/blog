import { createAsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider/config';
import { Profile, ValidateProfileError } from '../../types';
import { getProfileForm } from '../../selectors';
import { validateProfile } from '../validate-profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, getState, rejectWithValue } = thunkApi;
  const formData = getProfileForm(getState() as StateSchema);
  const errors = validateProfile(formData);

  if (errors.length) {
    // TODO: fix validation
    rejectWithValue([ValidateProfileError.NO_DATA]);
  }

  try {
    const response = await extra.api.put<Profile>('/profile', formData);

    return response.data;
  } catch (e) {
    console.log(e);

    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
