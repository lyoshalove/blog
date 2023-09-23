import { StateSchema } from 'app/providers/StoreProvider/config';

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
