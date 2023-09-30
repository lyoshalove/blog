import { StateSchema } from 'app/providers/StoreProvider/config';

export const getUserInited = (state: StateSchema) => state.user._inited;
