import { StateSchema } from 'app/providers/StoreProvider/config';

export const getLoginError = (state: StateSchema) => state?.login?.error;
