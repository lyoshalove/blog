import { StateSchema } from 'app/providers/StoreProvider/config';

export const getProfileData = (state: StateSchema) => state.profile?.data;
