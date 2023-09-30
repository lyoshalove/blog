import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config';
import { Article } from '../../types';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig>(
  'article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article>(`articles/${articleId}`);

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
