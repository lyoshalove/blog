import { StateSchema } from 'app/providers/StoreProvider/config';

export const getLoginLoading = (state: StateSchema) => state?.login?.isLoading ?? false;
