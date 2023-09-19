import { StateSchema } from 'app/providers/StoreProvider/config';

export const getProfileError = (state: StateSchema) => state.profile?.error;
