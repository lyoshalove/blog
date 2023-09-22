import { StateSchema } from 'app/providers/StoreProvider/config';

export const getProfileForm = (state: StateSchema) => state.profile?.form;
