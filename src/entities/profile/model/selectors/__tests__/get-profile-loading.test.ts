import { StateSchema } from 'app/providers/StoreProvider/config';
import { getProfileLoading } from '../get-profile-loading';

describe('get-profile-loading.ts', () => {
  test('should return loading data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileLoading(state as StateSchema)).toEqual(true);
  });

  test('should return undefined', () => {
    expect(getProfileLoading({} as StateSchema)).toEqual(undefined);
  });
});
