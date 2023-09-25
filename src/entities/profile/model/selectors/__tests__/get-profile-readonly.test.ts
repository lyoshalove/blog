import { StateSchema } from 'app/providers/StoreProvider/config';
import { getProfileReadonly } from '../get-profile-readonly';

describe('get-profile-readonly.ts', () => {
  test('should return readonly data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should return undefined', () => {
    expect(getProfileReadonly({} as StateSchema)).toEqual(undefined);
  });
});
