import { StateSchema } from 'app/providers/StoreProvider/config';

import { getProfileData } from '../get-profile-data';
import { profileData } from './profile-data';

describe('get-profile-data.ts', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  test('should return undefined', () => {
    expect(getProfileData({} as StateSchema)).toEqual(undefined);
  });
});
