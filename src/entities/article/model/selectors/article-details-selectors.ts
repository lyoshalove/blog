import { StateSchema } from 'app/providers/StoreProvider/config';

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
