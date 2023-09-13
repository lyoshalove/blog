import { StateSchema } from 'app/providers/StoreProvider/config';

export const getLoginUsername = (state: StateSchema) => state?.login?.username ?? '';
