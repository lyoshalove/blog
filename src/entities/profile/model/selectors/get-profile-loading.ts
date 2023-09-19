import { StateSchema } from 'app/providers/StoreProvider/config';

export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading;
