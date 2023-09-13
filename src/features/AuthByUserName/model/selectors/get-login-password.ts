import { StateSchema } from 'app/providers/StoreProvider/config';

export const getLoginPassword = (state: StateSchema) => state?.login?.password ?? '';
