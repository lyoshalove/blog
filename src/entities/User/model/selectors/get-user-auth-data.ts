import { StateSchema } from 'app/providers/StoreProvider/config';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
