import { StateSchema } from 'app/providers/StoreProvider/config';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text;
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
