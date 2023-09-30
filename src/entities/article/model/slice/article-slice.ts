import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Article, ArticleDetailsSchema } from '../types';
import { fetchArticleById } from '../services';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleSlice;
