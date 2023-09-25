import { StateSchema } from 'app/providers/StoreProvider/config';

import { getProfileError } from '../get-profile-error';

describe('get-profile-error.ts', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'SNUS',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('SNUS');
  });

  test('should return undefined', () => {
    expect(getProfileError({} as StateSchema)).toEqual(undefined);
  });
});
