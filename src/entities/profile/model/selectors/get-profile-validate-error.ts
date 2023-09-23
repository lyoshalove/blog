import { StateSchema } from 'app/providers/StoreProvider/config';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateError;
