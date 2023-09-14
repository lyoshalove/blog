import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
