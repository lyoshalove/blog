import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config';
import { getUserAuthData } from 'entities/User';
import { type Comment } from 'entities/comment';
import { getArticleDetailsData } from 'entities/article';
import { addCommentFormActions } from 'features/add-comment-form/model/slice/add-comment-form-slice';
import { fetchCommentsByArticleId } from '../fetch-comments-by-article-id';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig>(
  'articleDetails/sendComment',
  async (text, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState,
    } = thunkApi;
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>(
        'comments',
        {
          articleId: article.id,
          userId: userData.id,
          text,
        },
      );

      if (!response.data) {
        throw new Error();
      }

      dispatch(addCommentFormActions.setText(''));
      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      console.log(e);

      return rejectWithValue('error');
    }
  },
);
